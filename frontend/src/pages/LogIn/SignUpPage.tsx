import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// 이름 아이디 컴포넌트
interface NameIdComponentProps {
  onNext: () => void;
}
function NameIdComponent({ onNext }: NameIdComponentProps) {
  return (
    <>
      <input type="text" placeholder="이름" />
      <input type="text" placeholder="아이디" />
      {/* 이름/아이디 입력 필드 */}
      <button type="submit" onClick={onNext}>
        다음
      </button>
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
      <input type="password" placeholder="비밀번호" />
      <input type="password" placeholder="비밀번호 확인" />
      <button type="submit" onClick={onNext}>
        다음
      </button>
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
    }
  };

  return (
    <Routes>
      <Route path="/" element={<NameIdComponent onNext={nextStep} />} />
      <Route
        path="password"
        element={<PasswordComponent onNext={nextStep} />}
      />
    </Routes>
  );
}

export default SignUp;
