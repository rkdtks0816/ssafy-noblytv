import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import {
  API_GYMNASTICS,
  API_PORT,
  API_SENIOR_SIGN_UP,
  BASE_URL,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SENIOR_UNIQUE_CODE,
} from '../../constants/constants';
import gymnasticsInitKeywords from './gymnasticsInitKeywords';
import useSeniorSignUpStore from '../../store/useSeniorSignUpStore';
import useModalContentsStore from '../../store/useModalContents';
import Modal from '../../components/Modal/Modal';
import useOldUserStore from '../../store/useOldUserStore';
import BgImgStyle from '../../components/BgImg/BgImgStyle';

function SeniorBirth({
  setNowSeniorSignUp,
}: {
  setNowSeniorSignUp: (nowSeniorSignUp: string) => void;
}) {
  // useNavigate 훅을 사용하여 애플리케이션 내에서 라우팅을 제어합니다.
  const navigate = useNavigate();
  const { seniorSignUpInfo, setSeniorSignUpInfo } = useSeniorSignUpStore();
  const { modalContents, setModalContents } = useModalContentsStore();
  const { setOldUserId } = useOldUserStore();

  const handleBackBtn = () => {
    setNowSeniorSignUp(PATH_SENIOR_SIGN_UP_NAME_GENDER);
  };

  // '음력' 또는 '양력' 선택 시 setSeniorInfo 사용하여 값을 새롭게 할당
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setSeniorSignUpInfo({ ...seniorSignUpInfo, lunarSolar: 'LUNAR' });
    } else if (selected === 'right') {
      setSeniorSignUpInfo({ ...seniorSignUpInfo, lunarSolar: 'SOLAR' });
    }
  };

  // birthday 입력필드가 변할 때마다 setSeniorInfo 사용하여 값을 새롭게 할당
  const Changebirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'birth') {
      setSeniorSignUpInfo({ ...seniorSignUpInfo, birth: value });
    }
  };

  const gymnasticsInit = (oldUserId: string) => {
    gymnasticsInitKeywords.map(gymnasticsInitKeyword => {
      axios
        .post(
          `${BASE_URL}:${API_PORT}${API_GYMNASTICS}/${oldUserId}?oldUserIds=${oldUserId}&keyword=${gymnasticsInitKeyword.keyword}&day=${gymnasticsInitKeyword.day}`,
          { headers: { 'Content-Type': 'application' } },
        )
        .catch(error => {
          console.error(error);
        });
      return null;
    });
  };

  const handleSubmit = () => {
    if (seniorSignUpInfo.lunarSolar === '') {
      setModalContents('양력/음력을 선택해주세요.');
    } else if (seniorSignUpInfo.birth === '') {
      setModalContents('생신을 선택해주세요.');
    } else {
      axios
        .post<{ userId: string; username: string }>(
          `${BASE_URL}:${API_PORT}${API_SENIOR_SIGN_UP}`,
          seniorSignUpInfo,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(response => {
          navigate(
            `${PATH_SENIOR_CONNECT}?uniqueCode=${encodeURIComponent(response.data.userId)}`,
            { state: PATH_SENIOR_UNIQUE_CODE },
          );
          setOldUserId(response.data.userId);
          gymnasticsInit(response.data.userId);
        })
        .catch(error => {
          // axios 실패 시 실행되는 부분
          console.error('Axios error:', error);
        });
    }
  };

  return (
    <BgImgStyle>
      <FlexBoxStyle>
        <BackBtnStyle onClick={handleBackBtn} />
        <MenuTitleStyle>어르신 생년월일</MenuTitleStyle>
        <ToggleBtn
          optionLeft="음력"
          optionRight="양력"
          initType={seniorSignUpInfo.lunarSolar === 'LUNAR' ? 'left' : 'right'}
          onToggle={handleToggle}
        />
        <InputBoxStyle
          name="birth"
          type="date"
          style={{ marginTop: '20px' }}
          onChange={Changebirth}
          value={seniorSignUpInfo.birth}
        />
      </FlexBoxStyle>
      <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
        완료
      </LargeBtnStyle>
      {modalContents && <Modal />}
    </BgImgStyle>
  );
}

export default SeniorBirth;
