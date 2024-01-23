import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import Select from 'react-select';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';

// 이름 아이디 컴포넌트
interface NameIdComponentProps {
  onNext: () => void;
}
function NameIdComponent({ onNext }: NameIdComponentProps) {
  return (
    <>
      <Input type="text" placeholder="이름" />
      <Input type="text" placeholder="아이디" />
      {/* 이름/아이디 입력 필드 */}
      <Button label="다음" buttontype="next" onClick={onNext} />
    </>
  );
}

// 비밀번호 컴포넌트
interface PasswordComponentProps {
  onNext: () => void;
}
function PasswordComponent({ onNext }: PasswordComponentProps) {
  return (
    <>
      {/* 비밀번호 입력 필드 */}
      <Input type="password" placeholder="비밀번호" />
      <Input type="password" placeholder="비밀번호 확인" />
      <Button label="다음" buttontype="next" onClick={onNext} />
    </>
  );
}

// 생년월일 컴포넌트
interface BirthdayComponentProps {
  onNext: () => void;
}

function BirthdayComponent({ onNext }: BirthdayComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [selectDay, setSelectDay] = useState(new Date()); // 선택된 날짜 상태 관리

  const toggleModal = () => setIsModalOpen(!isModalOpen); // 모달 토글 함수

  // 캘린더에서 날짜 선택 시 호출되는 함수
  const handleDateChange = (newDate: Date) => {
    setSelectDay(newDate); // 선택된 날짜로 상태 업데이트
    toggleModal(); // 모달 닫기
  };

  const dropdownOptions = [
    { value: selectDay, label: selectDay.toLocaleDateString() },
  ];

  return (
    <>
      <Select
        options={dropdownOptions}
        value={dropdownOptions[0]} // 현재 선택된 옵션 설정
        placeholder="생년월일 선택"
        isSearchable={false}
        onFocus={toggleModal}
      />
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <Calendar
          onChange={newdate => handleDateChange(newdate)}
          value={selectDay}
        />
      </Modal>
      <Button label="다음" buttontype="next" onClick={onNext} />
    </>
  );
}

function SignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step === 0) {
      navigate('/signup/password');
      setStep(1); // 다음 단계로 변경.
    } else if (step === 1) {
      navigate('/signup/birthday');
      setStep(2);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<NameIdComponent onNext={nextStep} />} />
      <Route
        path="password"
        element={<PasswordComponent onNext={nextStep} />}
      />
      <Route
        path="birthday"
        element={<BirthdayComponent onNext={nextStep} />}
      />
    </Routes>
  );
}

export default SignUp;
