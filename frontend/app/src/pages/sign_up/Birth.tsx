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
import { LunarSolar, UserInfoT } from './SignUpType';

function Birthday() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<UserInfoT>({
    userId: '',
    username: '',
    password: '',
    lunarSolar: LunarSolar.SOLAR,
    birth: '',
    oldUserIds: [],
  });

  // location.state가 유효한 객체일 경우 userInfo 상태를 업데이트하고, 그렇지 않으면 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setUserInfo(location.state as UserInfoT);
    } else {
      setUserInfo({
        userId: '',
        username: '',
        password: '',
        lunarSolar: LunarSolar.SOLAR,
        birth: '',
        oldUserIds: [],
      });
    }
  }, [location.state]);

  const handleBackBtn = () => {
    navigate('/sign-up/password', { state: userInfo });
  };

  // '음력' 또는 '양력' 선택 시 setUserInfo를 사용하여 userInfo.lunarSloar 필드를
  // LunarSolar.Lunar 또는 LunarSolar.Solar로 설정
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setUserInfo({ ...userInfo, lunarSolar: LunarSolar.LUNAR });
    } else if (selected === 'right') {
      setUserInfo({ ...userInfo, lunarSolar: LunarSolar.SOLAR });
    }
  };

  // birthday 입력필드가 변할 때마다 setUserInfo 사용하여 값을 새롭게 할당
  const Changebirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'birth') {
      setUserInfo({ ...userInfo, birth: value });
    }
  };

  const handleSubmitAsync = async () => {
    const response = await axios.post(
      'http://3.38.153.237:8080/users/family/signup',
      userInfo,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    console.log(response.data);
    navigate('/senior-connect');
  };

  const handleSubmit = () => {
    handleSubmitAsync().catch(error => {
      console.error('회원가입 실패:', error);
      // console.error('회원가입 실패:', error.response.config.data);
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
            initType={
              userInfo.lunarSolar === LunarSolar.LUNAR ? 'left' : 'right'
            }
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
