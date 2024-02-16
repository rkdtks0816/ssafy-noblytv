import { useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import ToggleBtn from '../../components/ToggleBtn/ToggleBtn';
import { SeniorSignUpType } from '../../types/api_types';
import {
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP_BIRTH,
} from '../../constants/constants';
import useSeniorSignUpStore from '../../store/useSeniorSignUpStore';
import useModalContentsStore from '../../store/useModalContents';
import Modal from '../../components/Modal/Modal';
import BgImgStyle from '../../components/BgImg/BgImgStyle';

function SeniorNameGender({
  setNowSeniorSignUp,
}: {
  setNowSeniorSignUp: (nowSeniorSignUp: string) => void;
}) {
  const navigate = useNavigate();
  const { seniorSignUpInfo, setSeniorSignUpInfo } = useSeniorSignUpStore();
  const { modalContents, setModalContents } = useModalContentsStore();

  const handleBackBtn = () => {
    navigate(PATH_SENIOR_CONNECT);
  };

  // '남성' 또는 '여성' 선택 시 setSeniorInfo 사용하여 값을 새롭게 할당
  const handleToggle = (selected: string) => {
    if (selected === 'left') {
      setSeniorSignUpInfo({ ...seniorSignUpInfo, gender: 'MALE' });
    } else if (selected === 'right') {
      setSeniorSignUpInfo({ ...seniorSignUpInfo, gender: 'FEMALE' });
    }
  };

  // 사용자 입력을 처리하고, seniorInfo 상태를 업데이트 합니다. 입력 필드가 변경될 때마다 호출.
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: keyof SeniorSignUpType,
  ) => {
    setSeniorSignUpInfo({ ...seniorSignUpInfo, [field]: event.target.value });
  };

  const handleSubmit = () => {
    if (seniorSignUpInfo.username === '') {
      setModalContents('이름을 입력해주세요');
    } else if (seniorSignUpInfo.gender === '') {
      setModalContents('성별을 선택해주세요');
    } else {
      setNowSeniorSignUp(PATH_SENIOR_SIGN_UP_BIRTH);
    }
  };

  return (
    <BgImgStyle>
      <FlexBoxStyle>
        <BackBtnStyle onClick={handleBackBtn} />
        <MenuTitleStyle>어르신 정보</MenuTitleStyle>
        <ToggleBtn
          optionLeft="남성"
          optionRight="여성"
          onToggle={handleToggle}
        />
        <InputBoxStyle
          placeholder="성함"
          style={{ marginTop: '20px' }}
          onChange={e => handleInputChange(e, 'username')}
          value={seniorSignUpInfo.username}
        />
      </FlexBoxStyle>
      <LargeBtnStyle onClick={handleSubmit} style={{ marginBottom: '10vh' }}>
        다음
      </LargeBtnStyle>
      {modalContents && <Modal />}
    </BgImgStyle>
  );
}

export default SeniorNameGender;
