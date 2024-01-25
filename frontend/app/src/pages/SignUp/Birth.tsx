import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserInfoT } from './SignUpType';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';

function Birthday() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<UserInfoT>({
    userId: '',
    userName: '',
    password: '',
    lunarSloar: '',
    birth: '',
    oldUserId: '',
  });

  // 이전 정보 저장
  useEffect(() => {
    setUserInfo(
      location.state || {
        userId: '',
        userName: '',
        password: '',
        lunarSloar: '',
        birth: '',
        oldUserId: '',
      },
    );
  }, [location.state]);

  // birthday 입력필드가 변할 때마다 setBirthday를 사용하여 값을 새롭게 할당
  const Changebirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'birth') {
      setUserInfo({ ...userInfo, birth: value });
    }
  };

  const handleBackBtn = () => {
    navigate('/sign-up/password', { state: userInfo });
  };

  // updateBrithday함수에 birth 인자로 사용해서 스토어의 birth 필드 업데이트
  const handleSubmit = () => {
    console.log(userInfo);
  };

  // '음력' 또는 '양력' 선택 시 updateLunarSloar를 사용하여 스토어의 lunarSloar 필드 업데이트
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setUserInfo({ ...userInfo, lunarSloar: '음력' });
    } else if (selected === 'right') {
      setUserInfo({ ...userInfo, lunarSloar: '양력' });
    }
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
            initType={userInfo.lunarSloar === '음력' ? 'left' : 'right'}
            onToggle={handleToggle}
          ></ToggleBtn>
          <InputBoxStyle
            name="birth"
            type="date"
            style={{ marginTop: '20px' }}
            onChange={Changebirth}
            value={userInfo.birth}
          />
        </FlexBoxStyle>
        <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
          다음
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default Birthday;
