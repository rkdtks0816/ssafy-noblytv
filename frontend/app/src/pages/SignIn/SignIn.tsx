import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import { FindIdPwBtnS, LogoImgS, SignUpBtnS } from './SignInStyle';
import {
  BASE_URL,
  API_PORT,
  API_FAMILY_SIGN_IN,
  PATH_COMMUNITY,
  PATH_SIGN_UP_NAME_ID,
} from '../../constants/api';
import { SignInType, SignInResType } from '../../types/api';
import { signInInit } from '../../constants/type_init';
import Modal from '../../components/Modal/Modal';

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
    axios
      .post(`${BASE_URL}:${API_PORT}${API_FAMILY_SIGN_IN}`, signInData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        const data = response.data as SignInResType;
        Cookies.set('authToken', data.accessToken, { expires: 7 });
        navigate(PATH_COMMUNITY);
      })
      .catch(error => {
        console.error('Axios error:', error);
        setModalContents(
          <div>
            아이디와 비밀번호를 <br />
            로그인하여 주세요.
          </div>,
        );
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
        <Modal modalContents={modalContents} onClictBtn={setModalContents} />
      )}
    </div>
  );
}

export default SignIn;
