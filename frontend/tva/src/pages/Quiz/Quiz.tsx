import { useEffect, useState } from 'react';
import axios from 'axios';
import ChildCenter from '../../components/ChildCenter/ChildCenter';

function Quiz() {
  const [quizContents, setQuizContents] = useState('');

  useEffect(() => {
    const getQuiz = async () => {
      try {
        const response = await axios.get<string>('http://3.38.153.237:8080/');
        console.log(response.data);
        setQuizContents(response.data);
      } catch (err) {
        console.error('QUIZ 데이터 응답 에러 발생:', err);
      }
    };

    getQuiz().catch(err => console.error('getQuiz 실행 중 오류 발생:', err));
  }, []);

  return <ChildCenter ChildCenterContents={quizContents} />;
}

export default Quiz;
