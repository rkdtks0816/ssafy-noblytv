import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';
import { UserInfoT } from './SignUpType';

function Password() {
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
  const [formatState, setformatState] = useState('');
  const [mismatchState, setmismatchState] = useState('');
  const [formatError, setformatError] = useState('');
  const [mismatchError, setmismatchError] = useState('');

  // 이전 정보 저장
  setUserInfo(location.state);

  // 'password'와 'password_confirm' 입력 필드가 변경될 때, 비밀번호 길이 및 일치성을 검증하고 오류 메시지 설정
  const ChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'password') {
      if (value.length < 8) {
        setformatState('error');
        setformatError('비밀번호는 8자 이상이어야 합니다.');
      } else {
        setformatState('success');
        setformatError('사용가능한 비밀번호입니다.');
      }
    }
    if (name === 'password_confirm') {
      if (value !== password) {
        setformatState('error');
        setError('비밀번호가 일치하지 않습니다.');
      } else if (value.length < 8) {
        setError('비밀번호는 8자 이상이어야 합니다.');
      } else {
        setformatState('success');
        setError('');
      }
    }
  };

  const handleSubmit = () => {
    if (password.length >= 8 && password === confirmPassword) {
      updateLastUserPassword(password); // 마지막 사용자의 비밀번호를 업데이트
      navigate('/app/sign-up/birthday'); // 다음 페이지로 이동
    }
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle to="/app/sign-up/name-id" />
          <MenuTitleStyle>회원가입</MenuTitleStyle>
          <InputBoxStyle
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={ChangePassword}
            value={password}
          />
          {formatState && (
            <StatusMsg
              statusMsgType={formatstate}
              statusMsgContents={formatError}
            />
          )}
          <InputBoxStyle
            name="password_confirm"
            type="password"
            placeholder="다시 한번 입력하세요."
            style={{ marginTop: '20px' }}
            onChange={ChangePassword}
            value={confirmPassword}
          />
          {mismatchState && (
            <StatusMsg statusMsgType="error" statusMsgContents={formatError} />
          )}
        </FlexBoxStyle>
        <LargeBtnStyle
          to="/sign-up/birthday"
          style={{ marginBottom: '10vh' }}
          onClick={handleSubmit}
        >
          다음
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default Password;
