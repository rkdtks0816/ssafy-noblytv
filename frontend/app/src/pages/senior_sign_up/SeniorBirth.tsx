import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import { seniorSignUpInit } from '../../constants/type_init';
import { SeniorSignUpType } from '../../types/api_types';
import {
  // API_GYMNASTICS,
  API_PORT,
  API_SENIOR_SIGN_UP,
  BASE_URL,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SENIOR_SIGN_UP_UNIQUE_CODE,
} from '../../constants/constants';
// import gymnasticsInitKeywords from './gymnasticsInitKeywords';

function SeniorBirth() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  const [seniorInfo, setSeniorInfo] =
    useState<SeniorSignUpType>(seniorSignUpInit);

  // location.state가 유효한 객체일 경우 seniorInfo 상태를 업데이트하고, 그렇지 않으면 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setSeniorInfo(location.state as SeniorSignUpType);
    } else {
      setSeniorInfo(seniorSignUpInit);
    }
  }, [location.state]);

  const handleBackBtn = () => {
    navigate(PATH_SENIOR_SIGN_UP_NAME_GENDER, { state: seniorInfo });
  };

  // '음력' 또는 '양력' 선택 시 setSeniorInfo 사용하여 값을 새롭게 할당
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setSeniorInfo({ ...seniorInfo, lunarSolar: 'LUNAR' });
    } else if (selected === 'right') {
      setSeniorInfo({ ...seniorInfo, lunarSolar: 'SOLAR' });
    }
  };

  // birthday 입력필드가 변할 때마다 setSeniorInfo 사용하여 값을 새롭게 할당
  const Changebirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'birth') {
      setSeniorInfo({ ...seniorInfo, birth: value });
    }
  };

  // const gymnasticsInit = (oldUserId: string) => {
  //   gymnasticsInitKeywords.map(gymnasticsInitKeyword => {
  //     axios
  //       .post(
  //         `${BASE_URL}:${API_PORT}${API_GYMNASTICS}/${oldUserId}`,
  //         gymnasticsInitKeyword,
  //         { headers: { 'Content-Type': 'application' } },
  //       )
  //       .catch(error => {
  //         console.error(error);
  //       });
  //     return null;
  //   });
  // };

  const handleSubmit = () => {
    axios
      .post<{ userId: string; username: string }>(
        `${BASE_URL}:${API_PORT}${API_SENIOR_SIGN_UP}`,
        seniorInfo,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        // axios 성공 시 실행되는 부분
        console.log('Axios success:', response);
        navigate(PATH_SENIOR_SIGN_UP_UNIQUE_CODE);
        Cookies.set('oldUserId', response.data.userId, { expires: 7 });
        Cookies.set('oldUserName', response.data.username, { expires: 7 });
        // gymnasticsInit(response.data.userId);
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
          <MenuTitleStyle>어르신 생년월일</MenuTitleStyle>
          <ToggleBtn
            optionLeft="음력"
            optionRight="양력"
            initType={seniorInfo.lunarSolar === 'LUNAR' ? 'left' : 'right'}
            onToggle={handleToggle}
          />
          <InputBoxStyle
            name="birth"
            type="date"
            style={{ marginTop: '20px' }}
            onChange={Changebirth}
            value={seniorInfo.birth}
          />
        </FlexBoxStyle>
        <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
          완료
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default SeniorBirth;
