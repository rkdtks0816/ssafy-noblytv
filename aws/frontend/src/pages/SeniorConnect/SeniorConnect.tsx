import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import AddSeniorS from '../../components/AddSenior/AddSeniorS';
import Modal from '../../components/Modal/Modal';
import {
  API_FAMILY,
  API_PORT,
  BASE_URL,
  PATH_MAIN,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP,
  PATH_SIGN_IN,
} from '../../constants/constants';
import Loading from '../../components/Loading/Loading';
import useUserStore from '../../store/useUserStore';
import GetUserInfo from '../../utils/GetUserInfo';
import useRedirectStore from '../../store/useRedirectStore';
import useOldUserStore from '../../store/useOldUserStore';
import GetOldUserInfo from '../../utils/GetOldUserInfo';
import useModalContentsStore from '../../store/useModalContents';

function SeniorConnect() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state;
  const queryParams = new URLSearchParams(location.search);
  const uniqueCode = queryParams.get('uniqueCode');
  const { grantType, accessToken, userId } = useUserStore();
  const { redirectPath, setRedirectPath } = useRedirectStore();
  const { setOldUserId } = useOldUserStore();
  const { modalContents, setModalContents } = useModalContentsStore();
  const [oldUserUniqueCode, setOldUserUniqueCode] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOldUserUniqueCode(event.target.value);
  };

  const handleBackBtn = () => {
    navigate(PATH_MAIN);
  };

  const handleSubmit = useCallback(() => {
    if (!oldUserUniqueCode) {
      setModalContents('고유코드를 입력해주세요.');
    } else {
      GetUserInfo({
        grantType,
        accessToken,
        userId,
        successFunc: userInfoData => {
          const oldUserIds = userInfoData.familyRelations.map(
            item => item.oldUserInfo.userId,
          );
          axios
            .put(
              `${BASE_URL}:${API_PORT}${API_FAMILY}/${userId}/oldUsers`,
              [...oldUserIds, oldUserUniqueCode],
              {
                headers: {
                  Authorization: `${grantType} ${accessToken}`,
                  'Content-Type': 'application/json',
                },
              },
            )
            .then(() => {
              setOldUserId(oldUserUniqueCode);
              GetOldUserInfo({
                grantType,
                accessToken,
                oldUserId: oldUserUniqueCode,
                successFunc: () => {
                  if (state) {
                    navigate(state);
                  } else {
                    navigate(redirectPath);
                  }
                },
              });
            })
            .catch(() => setModalContents('고유코드를 확인해주세요.'));
        },
      });
    }
  }, [
    oldUserUniqueCode,
    grantType,
    accessToken,
    userId,
    setOldUserId,
    navigate,
    redirectPath,
  ]);

  useEffect(() => {
    if (accessToken === '') {
      if (uniqueCode) {
        setRedirectPath(`${PATH_SENIOR_CONNECT}?uniqueCode=${uniqueCode}`);
      }
      navigate(PATH_SIGN_IN);
    } else if (uniqueCode) {
      if (redirectPath.includes(PATH_SENIOR_CONNECT)) {
        setRedirectPath(PATH_MAIN);
      }
      const decodedUniqueCode = decodeURIComponent(uniqueCode);
      setOldUserUniqueCode(decodedUniqueCode);
      setRedirectPath(PATH_MAIN);
      handleSubmit();
    }
  }, [
    accessToken,
    handleSubmit,
    navigate,
    redirectPath,
    setRedirectPath,
    uniqueCode,
  ]);

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>어르신 연결</MenuTitleStyle>
          <InputBoxStyle
            placeholder="어르신 고유코드를 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={handleInputChange}
          />
        </FlexBoxStyle>
        <FlexBoxStyle>
          <LargeBtnStyle
            style={{ marginBottom: '20px' }}
            onClick={handleSubmit}
          >
            완료
          </LargeBtnStyle>
          <AddSeniorS to={PATH_SENIOR_SIGN_UP}>
            어르신을 등록하고 싶어요!
          </AddSeniorS>
        </FlexBoxStyle>
      </BgImgStyle>
      {modalContents && <Modal />}
      {uniqueCode && <Loading />}
    </div>
  );
}

export default SeniorConnect;
