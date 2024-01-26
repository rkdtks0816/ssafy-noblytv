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

function SeniorNameGender() {
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
    navigate('/senior-connect', { state: seniorInfo });
  };

  // '남성' 또는 '여성' 선택 시 setSeniorInfo 사용하여 값을 새롭게 할당
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setSeniorInfo({ ...seniorInfo, gender: Gender.Male });
    } else if (selected === 'right') {
      setSeniorInfo({ ...seniorInfo, gender: Gender.Female });
    }
  };

  // 사용자 입력을 처리하고, seniorInfo 상태를 업데이트 합니다. 입력 필드가 변경될 때마다 호출.
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SeniorInfoT,
  ) => {
    setSeniorInfo({ ...seniorInfo, [field]: event.target.value });
  };

  const handleSubmit = () => {
    navigate('/senior-sign-up/birth-date', { state: seniorInfo });
  };

  // 콘솔창에서 Debug를 위해 사용
  // useEffect(() => {
  //   console.log('seniorInfo 상태가 변경되었습니다:', seniorInfo);
  // }, [seniorInfo]);

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>어르신 정보</MenuTitleStyle>
          <ToggleBtn
            optionLeft="남성"
            optionRight="여성"
            initType={
              seniorInfo.lunarSloar === LunarSolar.Lunar ? 'left' : 'right'
            }
            onToggle={handleToggle}
          />
          <InputBoxStyle
            placeholder="성함"
            style={{ marginTop: '70px' }}
            onChange={e => handleInputChange(e, 'userName')}
            value={seniorInfo.userName}
          />
        </FlexBoxStyle>
        <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
          다음
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default SeniorNameGender;
