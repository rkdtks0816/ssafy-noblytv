import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';
import {
  API_FAMILY_DUPLICATION,
  API_PORT,
  BASE_URL,
  PATH_SIGN_IN,
  PATH_SIGN_UP_PASSWORD,
} from '../../constants/constants';
import { SignUpType } from '../../types/api_types';
import useSignUpStore from '../../store/useSignUpStore';
import Modal from '../../components/Modal/Modal';
import useModalContentsStore from '../../store/useModalContents';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import useDebounce from '../../hooks/Debounce';

function NameId({
  setNowSignUp,
}: {
  setNowSignUp: (nowSignUp: string) => void;
}) {
  const navigate = useNavigate();
  const { signUpInfo, setSignUpInfo } = useSignUpStore();
  const { modalContents, setModalContents } = useModalContentsStore();
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<string>('');

  // userId 필드에 대한 디바운스 상태를 관리.
  const debouncedUserId = useDebounce(signUpInfo.userId, 500);

  // 디바운스된 userId에 대한 중복 확인 로직.
  useEffect(() => {
    const checkUserId = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}:${API_PORT}${API_FAMILY_DUPLICATION}/${debouncedUserId}`,
        );
        if (response.data) {
          setMessage('아이디가 중복 됩니다.');
          setMessageType('error');
        } else {
          setMessage('사용가능한 아이디 입니다.');
          setMessageType('success');
        }
      } catch (err) {
        setMessage('아이디 확인 중 에러가 발생했습니다.');
        // console.error('아이디 중복 검사 중 에러 발생:', err);
      }
    };
    // 입력필드가 비어있을때는 중복확인 로직이 작동하지 않게 처리
    if (debouncedUserId) {
      checkUserId().catch(err => {
        console.error('아이디 중복 검사 중 에러 발생:', err);
      });
    }
  }, [debouncedUserId]);

  // 사용자 입력을 처리하고, userInfo 상태를 업데이트 합니다. 입력 필드가 변경될 때마다 호출.
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SignUpType,
  ) => {
    setSignUpInfo({ ...signUpInfo, [field]: event.target.value });
  };

  const handleBackBtn = () => {
    navigate(PATH_SIGN_IN);
  };

  // 사용자 정보(이름과 아이디)를 추가하고, useNavigate를 사용하여 다음 페이지로 이동
  const handleSubmit = () => {
    if (messageType === 'error') {
      setModalContents(message);
    } else if (signUpInfo.username === '') {
      setModalContents('이름을 입력해주세요');
    } else if (signUpInfo.userId === '') {
      setModalContents('아이디를 입력해주세요');
    } else {
      setNowSignUp(PATH_SIGN_UP_PASSWORD);
    }
  };

  return (
    <BgImgStyle>
      <FlexBoxStyle>
        <BackBtnStyle onClick={handleBackBtn} />
        <MenuTitleStyle>회원가입</MenuTitleStyle>
        <InputBoxStyle
          placeholder="이름을 입력하세요."
          style={{ marginTop: '70px' }}
          onChange={e => handleInputChange(e, 'username')}
          value={signUpInfo.username}
        />
        <InputBoxStyle
          placeholder="아이디를 입력하세요."
          style={{ marginTop: '20px' }}
          onChange={e => handleInputChange(e, 'userId')}
          value={signUpInfo.userId}
        />
        {messageType && (
          <StatusMsg statusMsgType={messageType} statusMsgContents={message} />
        )}
      </FlexBoxStyle>
      <LargeBtnStyle style={{ marginBottom: '10vh' }} onClick={handleSubmit}>
        다음
      </LargeBtnStyle>
      {modalContents && <Modal />}
    </BgImgStyle>
  );
}

export default NameId;
