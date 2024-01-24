import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';
import { UserInfoT } from './SignUpType';

function NameId() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();

  // userInfo 상태를 관리하고 초기값을 설정합니다. 여기서 User 타입을 사용합니다.
  const [userInfo, setUserInfo] = useState<UserInfoT>({
    userId: '',
    userName: '',
    password: '',
    lunarSloar: '',
    birth: '',
    oldUserId: '',
  });

  // 사용자 입력을 처리하고, userInfo 상태를 업데이트 합니다. 입력 필드가 변경될 때마다 호출.
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof UserInfoT,
  ) => {
    setUserInfo({ ...userInfo, [field]: event.target.value });
  };

  // 사용자 정보(이름과 아이디)를 추가하고, useNavigate를 사용하여 다음 페이지로 이동
  const handleSubmit = () => {
    navigate('/sign-up/password', { state: userInfo });
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle to="/app/sign-in" />
          <MenuTitleStyle>회원가입</MenuTitleStyle>
          <InputBoxStyle
            placeholder="이름을 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={e => handleInputChange(e, 'userId')}
            value={userInfo.userId}
          />
          <InputBoxStyle
            placeholder="아이디를 입력하세요."
            style={{ marginTop: '20px' }}
            onChange={e => handleInputChange(e, 'userName')}
            value={userInfo.userName}
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
