import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import AddSeniorS from './SeniorConnectStyle';
import { SeniorSignUpType } from '../../types/api_types';
import { seniorSignUpInit } from '../../constants/type_init';
import Modal from '../../components/Modal/Modal';
import {
  PATH_COMMUNITY,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SIGN_IN,
} from '../../constants/api';
import apiSignIn from '../../utils/apiSignIn';
import manageAuthToken from '../../utils/manageAuthToken';

function SeniorConnect() {
  const navigate = useNavigate();
  const location = useLocation();

  const [modalContents, setModalContents] = useState<React.ReactNode>('');
  const [oldUserIds, setOldUserIds] = useState<string[]>([]);

  // 로그인 확인
  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN, { state: PATH_COMMUNITY }),
    });
  }, [navigate]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      oldUserId: [...userInfo.oldUserId, event.target.value],
    });
  };

  const handleBackBtn = () => {
    navigate(PATH_COMMUNITY);
  };

  const handleSubmit = () => {
    apiSignIn({
      signInData,
      successFunc: () => navigate(PATH_COMMUNITY),
      errorFunc: () => {
        setModalContents(
          <div>
            아이디와 비밀번호를 <br />
            로그인하여 주세요.
          </div>,
        );
      },
    }).catch(error => {
      console.error(error);
    });
  };

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
          <AddSeniorS to={PATH_SENIOR_SIGN_UP_NAME_GENDER}>
            어르신을 등록하고 싶어요!
          </AddSeniorS>
        </FlexBoxStyle>
      </BgImgStyle>
      {modalContents && (
        <Modal modalContents={modalContents} onClickBtn={setModalContents} />
      )}
    </div>
  );
}

export default SeniorConnect;
