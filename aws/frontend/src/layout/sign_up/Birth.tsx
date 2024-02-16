import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import {
  BASE_URL,
  API_PORT,
  API_FAMILY_SIGN_UP,
  PATH_SENIOR_CONNECT,
  PATH_SIGN_UP_PASSWORD,
  PATH_COMMUNITY,
} from '../../constants/constants';
import PostSignIn from '../../utils/PostSignIn';
import Loading from '../../components/Loading/Loading';
import useSignUpStore from '../../store/useSignUpStore';
import useModalContentsStore from '../../store/useModalContents';
import Modal from '../../components/Modal/Modal';
import useUserStore from '../../store/useUserStore';
import useMenuStore from '../../store/useMenuStore';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import { signUpInit } from '../../constants/type_init';

function Birth({
  setNowSignUp,
}: {
  setNowSignUp: (nowSignUp: string) => void;
}) {
  const navigate = useNavigate();
  const { signUpInfo, setSignUpInfo } = useSignUpStore();
  const { modalContents, setModalContents } = useModalContentsStore();
  const { setGrantType, setAccessToken, setRefreshToken, setUserId } =
    useUserStore();
  const { setNowMenu } = useMenuStore();
  const [isLoding, setIsLoding] = useState<boolean>(false);

  const handleBackBtn = () => {
    setNowSignUp(PATH_SIGN_UP_PASSWORD);
  };

  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setSignUpInfo({ ...signUpInfo, lunarSolar: 'LUNAR' });
    } else if (selected === 'right') {
      setSignUpInfo({ ...signUpInfo, lunarSolar: 'SOLAR' });
    }
  };

  const Changebirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'birth') {
      setSignUpInfo({ ...signUpInfo, birth: value });
    }
  };

  const handleSubmit = () => {
    if (signUpInfo.lunarSolar === '') {
      setModalContents('양력/음력을 선택해주세요.');
    } else if (signUpInfo.birth === '') {
      setModalContents('생일을 선택해주세요.');
    } else {
      setIsLoding(true);
      axios
        .post(`${BASE_URL}:${API_PORT}${API_FAMILY_SIGN_UP}`, signUpInfo, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(() => {
          PostSignIn({
            signInData: {
              userId: signUpInfo.userId,
              password: signUpInfo.password,
            },
            successFunc: response => {
              setGrantType(response.data.grantType);
              setAccessToken(response.data.accessToken);
              setRefreshToken(response.data.refreshToken);
              setUserId(signUpInfo.userId);
              setNowMenu(PATH_COMMUNITY);
              navigate(PATH_SENIOR_CONNECT);
              setSignUpInfo(signUpInit);
              setIsLoding(false);
            },
          });
        })
        .catch(error => {
          // axios 실패 시 실행되는 부분
          console.error('Axios error:', error);
        });
    }
  };

  return (
    <BgImgStyle>
      <FlexBoxStyle>
        <BackBtnStyle onClick={handleBackBtn} />
        <MenuTitleStyle>회원가입</MenuTitleStyle>
        <ToggleBtn
          optionLeft="음력"
          optionRight="양력"
          initType={signUpInfo.lunarSolar === 'LUNAR' ? 'left' : 'right'}
          onToggle={handleToggle}
        />
        <InputBoxStyle
          name="birth"
          type="date"
          style={{ marginTop: '20px' }}
          onChange={Changebirth}
          value={signUpInfo.birth}
        />
      </FlexBoxStyle>
      <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
        완료
      </LargeBtnStyle>
      {modalContents && <Modal />}
      {isLoding && <Loading />}
    </BgImgStyle>
  );
}

export default Birth;
