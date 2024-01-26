import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import { SeniorInfoT, LunarSolar, Gender } from './SeniorSignUpType';

function SeniorBirth() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  const [seniorInfo, setSeniorInfo] = useState<SeniorInfoT>({
    userName: '',
    birth: '',
    lunarSloar: LunarSolar.Solar,
    gender: Gender.Male,
    medications: [],
    medicine: '',
    medicationTimes: '',
  });

  // location.state가 유효한 객체일 경우 seniorInfo 상태를 업데이트하고, 그렇지 않으면 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setSeniorInfo(location.state as SeniorInfoT);
    } else {
      setSeniorInfo({
        userName: '',
        birth: '',
        lunarSloar: LunarSolar.Solar,
        gender: Gender.Male,
        medications: [],
        medicine: '',
        medicationTimes: '',
      });
    }
  }, [location.state]);

  const handleBackBtn = () => {
    navigate('/senior-sign-up/name-gender', { state: seniorInfo });
  };

  // '음력' 또는 '양력' 선택 시 setSeniorInfo 사용하여 값을 새롭게 할당
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setSeniorInfo({ ...seniorInfo, lunarSloar: LunarSolar.Lunar });
    } else if (selected === 'right') {
      setSeniorInfo({ ...seniorInfo, lunarSloar: LunarSolar.Solar });
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
  // 콘솔창에서 Debug를 위해 사용
  // useEffect(() => {
  //   console.log('seniorInfo 상태가 변경되었습니다:', seniorInfo);
  // }, [seniorInfo]);

  const handleSubmit = () => {
    // 다음 페이지 구현 필요
    // navigate('/');
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
            initType={
              seniorInfo.lunarSloar === LunarSolar.Lunar ? 'left' : 'right'
            }
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
          다음
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default SeniorBirth;
