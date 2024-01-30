import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import { FindIdPwBtnS, LogoImgS, SignUpBtnS } from './SignInStyle';
import { baseUrl, urlPort } from '../../constants/api';
import { SignInData, ApiResponse } from './SignInType';
import Modal from '../../components/Modal/Modal';

function SignIn() {
  const navigate = useNavigate();
  const [modalContents, setModalContents] = useState<string>('');
  const [signInData, setsignInData] = useState<SignInData>({
    userId: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setsignInData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    fetch(`${baseUrl}:${urlPort}/users/family/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(signInData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json() as Promise<ApiResponse>; // 토큰이 JSON 형태로 반환되면 파싱하여 사용
      })
      .then(data => {
        // 세션에 토큰 저장
        Cookies.set('authToken', data.token, { expires: 7 });
        navigate('/community');
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setModalContents('아이디 비밀번호를 확인해주세요.');
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
        <SignUpBtnS to="/sign-up/name-id">처음이신가요?</SignUpBtnS>
      </BgImgStyle>
      {modalContents && (
        <Modal
          modalContents={
            <div>
              아이디 비밀번호를 <br /> 확인해 주세요.
            </div>
          }
        />
      )}
    </div>
  );
}

export default SignIn;
