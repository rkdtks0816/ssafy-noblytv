import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {
  BASE_URL,
  PATH_COMMUNITY,
  PATH_DATETIME,
  PATH_GYMNASTICS,
  PATH_MY,
  PATH_NOTICES,
  PATH_SELECT_SENIOR,
  PATH_SENIOR_CONNECT,
  PATH_SIGN_IN,
  SOCKET_PORT,
} from '../../constants/constants';
import Community from '../../layout/main/Community/Community';
import Datetime from '../../layout/main/Datetime/Datetime';
import Gymnastics from '../../layout/main/Gymnastics/Gymnastics';
import My from '../../layout/main/My/My';
import MainBoxS from './MainStyle';
import {
  FamilyPostsResType,
  OldUserInfoType,
  UserInfoGetOldInfoType,
} from '../../types/api_types';
import { oldUserInfoInit } from '../../constants/type_init';
import useMenuStore from '../../store/useMenuStore';
import useReloadStore from '../../store/useReloadStore';
import useUserStore from '../../store/useUserStore';
import GetUserInfo from '../../utils/GetUserInfo';
import useOldUserStore from '../../store/useOldUserStore';
import SelectSenior from '../../layout/main/SelectSenior/SelectSenior';
import GetOldUserInfo from '../../utils/GetOldUserInfo';
import Loading from '../../components/Loading/Loading';
import Notices from '../../layout/main/Notices/Notices';
import useAlarmsStore from '../../store/useAlarmsStore';
import useSocket from '../../hooks/useSocket';
import usePopupContents from '../../store/usePopupContents';
import Popup from '../../components/Popup/Popup';

function Main() {
  const navigate = useNavigate();
  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);
  const { grantType, accessToken, userId } = useUserStore();
  const { oldUserId, setOldUserId, setOldUsername } = useOldUserStore();
  const { reload, setReload } = useReloadStore();
  const { nowMenu } = useMenuStore();
  const { alarms, setAlarms } = useAlarmsStore();
  const { popupContents, setPopupContents } = usePopupContents();
  const [subMenu, setSubMenu] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [familyRelations, setFamilyRelations] = useState<
    UserInfoGetOldInfoType[]
  >([]);
  const [oldUserInfo, setOldUserInfo] =
    useState<OldUserInfoType>(oldUserInfoInit);
  const [postList, setPostList] = useState<FamilyPostsResType[]>([]);
  const getCurrentDate = (): string => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hours = String(currentDate.getHours() % 12 || 12).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const period = currentDate.getHours() < 12 ? '오전' : '오후';

    return `${year}-${month}-${day} ${period} ${hours}:${minutes}`;
  };

  useEffect(() => {
    setIsLoading(true);
    if (!accessToken) {
      navigate(PATH_SIGN_IN);
    } else {
      GetUserInfo({
        grantType,
        accessToken,
        userId,
        successFunc: UserInfoData => {
          if (UserInfoData.lastVisitedId) {
            setOldUserId(UserInfoData.lastVisitedId);
            setFamilyRelations(UserInfoData.familyRelations);
            setReload(true);
          } else if (UserInfoData.familyRelations.length === 0) {
            navigate(PATH_SENIOR_CONNECT);
          } else {
            setFamilyRelations(UserInfoData.familyRelations);
            setSubMenu(PATH_SELECT_SENIOR);
          }
          setIsLoading(false);
        },
        errorFunc: () => {
          setIsLoading(false);
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setReload(false);
    GetOldUserInfo({
      grantType,
      accessToken,
      oldUserId,
      successFunc: oldUserInfoData => {
        setOldUsername(oldUserInfoData.username);
        setOldUserInfo(oldUserInfoData);
        setPostList(
          [
            ...oldUserInfoData.familyposts,
            ...oldUserInfoData.posts.map(post => ({
              ...post,
              username: oldUserInfoData.username,
            })),
          ].sort(
            (a, b) =>
              new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime(),
          ),
        );
      },
    });
  }, [accessToken, grantType, oldUserId, reload, setOldUsername, setReload]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        if (data === 'post up') {
          alarms.push({
            alarm: `
                어르신 체조 영상을 확인하세요!`,
            alarmTime: getCurrentDate(),
          });
          setAlarms(alarms);
          setPopupContents(`
                어르신 체조 영상을 확인하세요!`);
          setTimeout(() => {
            setPopupContents('');
          }, 3000);
        }
      });
    }
    return () => {
      socket?.off('message');
    };
  }, [socket]);

  return (
    <div>
      <Header setSubMenu={setSubMenu} />
      <Footer />
      <MainBoxS>
        {nowMenu === PATH_COMMUNITY && (
          <Community postList={postList} setIsLoading={setIsLoading} />
        )}
        {nowMenu === PATH_DATETIME && (
          <Datetime
            schedulesData={oldUserInfo.schedules}
            diaryContentsData={oldUserInfo.diaries}
          />
        )}
        {nowMenu === PATH_GYMNASTICS && (
          <Gymnastics gymnasticsData={oldUserInfo.gymnastics} />
        )}
        {nowMenu === PATH_MY && <My />}
      </MainBoxS>
      {subMenu === PATH_SELECT_SENIOR && (
        <SelectSenior
          familyRelations={familyRelations}
          setSubMenu={setSubMenu}
        />
      )}
      {subMenu === PATH_NOTICES && <Notices setSubMenu={setSubMenu} />}
      <Popup />
      {isLoading && <Loading />}
    </div>
  );
}

export default Main;
