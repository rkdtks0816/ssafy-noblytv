import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import { FindIdPwBtnS, LogoImgS, SignUpBtnS } from './SignInStyle';
import { PATH_COMMUNITY, PATH_SIGN_UP } from '../../constants/constants';
import { SignInType } from '../../types/api_types';
import { signInInit } from '../../constants/type_init';
import Modal from '../../components/Modal/Modal';
import useModalContentsStore from '../../store/useModalContents';
import PostSignIn from '../../utils/PostSignIn';
import useRedirectStore from '../../store/useRedirectStore';
import useUserStore from '../../store/useUserStore';
import useMenuStore from '../../store/useMenuStore';

function SignIn() {
  const navigate = useNavigate();
  const { modalContents, setModalContents } = useModalContentsStore();
  const { redirectPath } = useRedirectStore();
  const { setGrantType, setAccessToken, setRefreshToken, setUserId } =
    useUserStore();
  const { setNowMenu } = useMenuStore();
  const [signInData, setsignInData] = useState<SignInType>(signInInit);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setsignInData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    PostSignIn({
      signInData,
      successFunc: response => {
        navigate(redirectPath);
        setGrantType(response.data.grantType);
        setAccessToken(response.data.accessToken);
        setRefreshToken(response.data.refreshToken);
        setUserId(signInData.userId);
        setNowMenu(PATH_COMMUNITY);
      },
      errorFunc: () => {
        setModalContents('아이디/비밀번호를 확인해주세요.');
      },
    });
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <LogoImgS />
          <InputBoxStyle
            placeholder="아이디를 입력하세요."
            style={{ marginTop: '70px' }}
            type="text"
            name="userId"
            value={signInData.userId}
            onChange={handleInputChange}
          />
          <InputBoxStyle
            placeholder="비밀번호를 입력하세요."
            style={{ marginTop: '20px' }}
            type="password"
            name="password"
            value={signInData.password}
            onChange={handleInputChange}
          />
          <LargeBtnStyle style={{ marginTop: '20px' }} onClick={handleLogin}>
            로그인
          </LargeBtnStyle>
          <FindIdPwBtnS to="/find-id-pw">아이디/비밀번호 찾기</FindIdPwBtnS>
        </FlexBoxStyle>
        <SignUpBtnS to={PATH_SIGN_UP}>처음이신가요?</SignUpBtnS>
      </BgImgStyle>
      {modalContents && <Modal />}
    </div>
  );
}

export default SignIn;
