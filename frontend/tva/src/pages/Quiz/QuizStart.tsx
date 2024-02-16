import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChildCenter from '../../components/ChildCenter/ChildCenter';

function QuizStart() {
  const navigator = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigator('/quiz');
    }, 4000);
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [navigator]);
  return <ChildCenter ChildCenterContents="할아버지 이제 퀴즈 낼께요!" />;
}

export default QuizStart;
