import { useNavigate } from 'react-router-dom';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

function LogInPage() {
  const navigate = useNavigate();

  // 회원가입 페이지 이동
  const handleSignUp = () => {
    navigate('/signup');
  };

  // 키보드 이벤트 처리
  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter') {
      handleSignUp();
    }
  };

  // 로그인 하기
  const handleLoginClick = () => {
    // 로그인 로직 작성 필요.
    // eslint-disable-next-line no-console
    console.log('로그인');
  };

  return (
    <>
      <Input placeholder="아이디" type="text" />
      <Input placeholder="비밀번호" type="password" />
      <Button buttontype="confirm" label="로그인" onClick={handleLoginClick} />
      <div
        role="button"
        tabIndex={0}
        onClick={handleSignUp}
        onKeyDown={handleKeyDown}
        style={{ cursor: 'pointer' }}
        aria-label="회원가입 페이지로 이동"
      >
        처음이신가요?
      </div>
    </>
  );
}

export default LogInPage;
