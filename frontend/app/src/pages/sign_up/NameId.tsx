import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';
import useDebounce from '../../hooks/Debounce';
import {
  API_FAMILY_DUPLICATION,
  API_PORT,
  BASE_URL,
  PATH_SIGN_IN,
  PATH_SIGN_UP_PASSWORD,
} from '../../constants/constants';
import { SignUpType } from '../../types/api_types';
import { signUpInit } from '../../constants/type_init';

function NameId() {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const location = useLocation();

  // userInfo 상태를 관리하고 초기값을 설정합니다. 여기서 User 타입을 사용합니다.
  const [userInfo, setUserInfo] = useState<SignUpType>(signUpInit);
  const [message, setMessage] = useState<string>('');
  const [messageType, setMessageType] = useState<string>('');

  // location.state를 확인하여 userInfo 상태를 업데이트하거나 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setUserInfo(location.state as SignUpType);
    } else {
      setUserInfo(signUpInit);
    }
  }, [location.state]);

  // userId 필드에 대한 디바운스 상태를 관리.
  const debouncedUserId = useDebounce(userInfo.userId, 500);

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
    setUserInfo({ ...userInfo, [field]: event.target.value });
  };

  const handleBackBtn = () => {
    navigate(PATH_SIGN_IN);
  };

  // 사용자 정보(이름과 아이디)를 추가하고, useNavigate를 사용하여 다음 페이지로 이동
  const handleSubmit = () => {
    navigate(PATH_SIGN_UP_PASSWORD, { state: userInfo });
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
            onChange={e => handleInputChange(e, 'username')}
            value={userInfo.username}
          />
          <InputBoxStyle
            placeholder="아이디를 입력하세요."
            style={{ marginTop: '20px' }}
            onChange={e => handleInputChange(e, 'userId')}
            value={userInfo.userId}
          />
          {messageType && (
            <StatusMsg
              statusMsgType={messageType}
              statusMsgContents={message}
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

export default NameId;
