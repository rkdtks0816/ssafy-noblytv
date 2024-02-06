import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import { FindIdPwBtnS, LogoImgS, SignUpBtnS } from './SignInStyle';
import { PATH_SIGN_UP_NAME_ID } from '../../constants/constants';
import { SignInType } from '../../types/api_types';
import { signInInit } from '../../constants/type_init';
import Modal from '../../components/Modal/Modal';
import postSignIn from '../../utils/postSignIn';

function SignIn() {
  const navigate = useNavigate();
  const [modalContents, setModalContents] = useState<React.ReactNode>('');
  const [signInData, setsignInData] = useState<SignInType>(signInInit);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setsignInData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    postSignIn({
      signInData,
      navigate,
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
        <SignUpBtnS to={PATH_SIGN_UP_NAME_ID}>처음이신가요?</SignUpBtnS>
      </BgImgStyle>
      {modalContents && (
        <Modal modalContents={modalContents} onClickBtn={setModalContents} />
      )}
    </div>
  );
}

export default SignIn;
