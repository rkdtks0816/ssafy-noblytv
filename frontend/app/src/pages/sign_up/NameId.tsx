import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';
import { UserInfoT } from './SignUpType';
import userInfoInit from './SignUpConstants';

function NameId() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  // userInfo 상태를 관리하고 초기값을 설정합니다. 여기서 User 타입을 사용합니다.
  const [userInfo, setUserInfo] = useState<UserInfoT>(userInfoInit);

  // location.state가 유효한 객체일 경우 userInfo 상태를 업데이트하고, 그렇지 않으면 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setUserInfo(location.state as UserInfoT);
    } else {
      setUserInfo(userInfoInit);
    }
  }, [location.state]);

  // 사용자 입력을 처리하고, userInfo 상태를 업데이트 합니다. 입력 필드가 변경될 때마다 호출.
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserInfoT,
  ) => {
    setUserInfo({ ...userInfo, [field]: event.target.value });
  };

  const handleBackBtn = () => {
    navigate('/sign-in');
  };

  // 사용자 정보(이름과 아이디)를 추가하고, useNavigate를 사용하여 다음 페이지로 이동
  const handleSubmit = () => {
    navigate('/sign-up/password', { state: userInfo });
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>회원가입</MenuTitleStyle>
          <InputBoxStyle
            placeholder="이름을 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={e => handleInputChange(e, 'userName')}
            value={userInfo.userName}
          />
          <InputBoxStyle
            placeholder="아이디를 입력하세요."
            style={{ marginTop: '20px' }}
            onChange={e => handleInputChange(e, 'userId')}
            value={userInfo.userId}
          />
          <StatusMsg
            statusMsgType="error"
            statusMsgContents="아이디가 중복 됩니다."
          />
        </FlexBoxStyle>
        <LargeBtnStyle style={{ marginBottom: '10vh' }} onClick={handleSubmit}>
          다음
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default NameId;
