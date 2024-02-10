import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import manageAuthToken from '../../utils/manageAuthToken';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { PATH_SIGN_IN } from '../../constants/constants';
import getOldUserInfo from '../../utils/getOldUserInfo';
import Community from '../../layout/Community/Community';
import Datetime from '../../layout/Datetime/Datetime';
import Gymnastics from '../../layout/Gymnastics/Gymnastics';
import My from '../../layout/My/My';
import MainBoxS from './MainStyle';
import { OldUserInfoType } from '../../types/api_types';
import { oldUserInfoInit } from '../../constants/type_init';
import useMenuStore from '../../store/menu';
import useReloadStore from '../../store/useReloadStore';

function Main() {
  const { reload, setReload } = useReloadStore();
  const nowMenu = useMenuStore(state => state.nowMenu);
  const navigate = useNavigate();

  const [oldUserInfo, setOldUserInfo] =
    useState<OldUserInfoType>(oldUserInfoInit);

  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN),
    });
  }, [navigate]);

  useEffect(() => {
    if (reload) {
      setReload(false);
      getOldUserInfo({
        successFunc: oldUserInfoData => {
          Cookies.set('oldUsername', oldUserInfoData.username, {
            expires: 7,
          });
          setOldUserInfo(oldUserInfoData);
        },
      }).catch(error => console.error('Axios error:', error));
    }
  }, [reload, setReload]);

  return (
    <div>
      <Header />
      <MainBoxS>
        {nowMenu === 'Community' && <Community />}
        {nowMenu === 'Datetime' && (
          <Datetime diaryContents={oldUserInfo.diaries} />
        )}
        {nowMenu === 'Gymnastics' && (
          <Gymnastics gymnasticsData={oldUserInfo.gymnastics} />
        )}
        {nowMenu === 'My' && <My />}
      </MainBoxS>
      <Footer />
    </div>
  );
}

export default Main;
