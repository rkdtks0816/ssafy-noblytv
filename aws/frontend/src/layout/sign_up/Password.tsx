import { useState } from 'react';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';
import useSignUpStore from '../../store/useSignUpStore';
import Modal from '../../components/Modal/Modal';
import useModalContentsStore from '../../store/useModalContents';
import {
  PATH_SIGN_UP_BIRTH,
  PATH_SIGN_UP_NAME_ID,
} from '../../constants/constants';
import BgImgStyle from '../../components/BgImg/BgImgStyle';

function Password({
  setNowSignUp,
}: {
  setNowSignUp: (nowSignUp: string) => void;
}) {
  const { signUpInfo, setSignUpInfo } = useSignUpStore();
  const { modalContents, setModalContents } = useModalContentsStore();
  const [currentPassword, setcurrentPassword] = useState('');
  const [formatState, setformatState] = useState('');
  const [mismatchState, setmismatchState] = useState('');
  const [formatError, setformatError] = useState('');
  const [mismatchError, setmismatchError] = useState('');

  const ChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'password') {
      if (value.length < 8) {
        setformatState('error');
        setformatError('비밀번호는 8자 이상이어야합니다.');
      } else {
        setcurrentPassword(value);
        setformatState('success');
        setformatError('사용가능한 비밀번호입니다.');
      }
    }
    if (name === 'password-confirm') {
      if (value !== currentPassword) {
        setmismatchState('error');
        setmismatchError('비밀번호가 일치하지않습니다.');
      } else {
        setSignUpInfo({ ...signUpInfo, password: value });
        setmismatchState('success');
        setmismatchError('비밀번호가 일치합니다.');
      }
    }
  };

  const handleBackBtn = () => {
    setNowSignUp(PATH_SIGN_UP_NAME_ID);
  };

  const handleSubmit = () => {
    if (formatState === 'error' && mismatchError === 'error') {
      setModalContents(formatState === 'error' ? formatError : mismatchError);
    } else if (signUpInfo.password === '') {
      setModalContents('비밀번호를 입력해주세요');
    } else {
      setNowSignUp(PATH_SIGN_UP_BIRTH);
    }
  };

  return (
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
      {modalContents && <Modal />}
    </BgImgStyle>
  );
}

export default Password;
