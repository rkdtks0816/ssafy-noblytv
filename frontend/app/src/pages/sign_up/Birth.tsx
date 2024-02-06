import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import { SignUpType } from '../../types/api_types';
import { signUpInit } from '../../constants/type_init';
import {
  BASE_URL,
  API_PORT,
  API_FAMILY_SIGN_UP,
  PATH_SIGN_UP_PASSWORD,
} from '../../constants/constants';
import postSignIn from '../../utils/postSignIn';

function Birthday() {
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<SignUpType>(signUpInit);

  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setUserInfo(location.state as SignUpType);
    } else {
      setUserInfo(signUpInit);
    }
  }, [location.state]);

  const handleBackBtn = () => {
    navigate(PATH_SIGN_UP_PASSWORD, { state: userInfo });
  };

  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setUserInfo({ ...userInfo, lunarSolar: 'LUNAR' });
    } else if (selected === 'right') {
      setUserInfo({ ...userInfo, lunarSolar: 'SOLAR' });
    }
  };

  const Changebirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'birth') {
      setUserInfo({ ...userInfo, birth: value });
    }
  };

  const handleSubmit = () => {
    console.log(userInfo);
    axios
      .post(`${BASE_URL}:${API_PORT}${API_FAMILY_SIGN_UP}`, userInfo, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        // axios 성공 시 실행되는 부분
        console.log('Axios success:', response);

        // 여기에서 postSignIn 호출
        postSignIn({
          signInData: { userId: userInfo.userId, password: userInfo.password },
          navigate,
        }).catch(error => {
          console.error('postSignIn error:', error);
        });
      })
      .catch(error => {
        // axios 실패 시 실행되는 부분
        console.error('Axios error:', error);
      });
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>회원가입</MenuTitleStyle>
          <ToggleBtn
            optionLeft="음력"
            optionRight="양력"
            initType={userInfo.lunarSolar === 'LUNAR' ? 'left' : 'right'}
            onToggle={handleToggle}
          />
          <InputBoxStyle
            name="birth"
            type="date"
            style={{ marginTop: '20px' }}
            onChange={Changebirth}
            value={userInfo.birth}
          />
        </FlexBoxStyle>
        <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
          완료
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default Birthday;
