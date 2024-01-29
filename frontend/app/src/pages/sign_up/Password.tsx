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

function Password() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<UserInfoT>(userInfoInit);
  const [currentPassword, setcurrentPassword] = useState('');
  const [formatState, setformatState] = useState('');
  const [mismatchState, setmismatchState] = useState('');
  const [formatError, setformatError] = useState('');
  const [mismatchError, setmismatchError] = useState('');

  // location.state가 유효한 객체일 경우 userInfo 상태를 업데이트하고, 그렇지 않으면 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setUserInfo(location.state as UserInfoT);
    } else {
      setUserInfo(userInfoInit);
    }
  }, [location.state]);

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
        setcurrentPassword(value);
        setformatState('success');
        setformatError('사용가능한 비밀번호입니다.');
      }
    }
    if (name === 'password-confirm') {
      if (value !== currentPassword) {
        setmismatchState('error');
        setmismatchError('비밀번호가 일치하지 않습니다.');
      } else {
        setUserInfo({ ...userInfo, password: value });
        setmismatchState('success');
        setmismatchError('비밀번호가 일치합니다.');
      }
    }
  };

  const handleBackBtn = () => {
    navigate('/sign-up/name-id', { state: userInfo });
  };

  const handleSubmit = () => {
    if (currentPassword.length >= 8 && currentPassword === userInfo.password) {
      navigate('/sign-up/birthday', { state: userInfo });
    }
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>회원가입</MenuTitleStyle>
          <InputBoxStyle
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={ChangePassword}
          />
          {formatState && (
            <StatusMsg
              statusMsgType={formatState}
              statusMsgContents={formatError}
            />
          )}
          <InputBoxStyle
            name="password-confirm"
            type="password"
            placeholder="다시 한번 입력하세요."
            style={{ marginTop: '20px' }}
            onChange={ChangePassword}
          />
          {mismatchState && (
            <StatusMsg
              statusMsgType={mismatchState}
              statusMsgContents={mismatchError}
            />
          )}
        </FlexBoxStyle>
        <LargeBtnStyle style={{ marginBottom: '10vh' }} onClick={handleSubmit}>
          다음
        </LargeBtnStyle>
      </BgImgStyle>
    </div>
  );
}

export default Password;
