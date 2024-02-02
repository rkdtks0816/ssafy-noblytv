import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import ChildCenter from '../../components/ChildCenter/ChildCenter';

function Quiz() {
  const [quizContents, setQuizContents] = useState<string>('');
  const socket = io('http://i10c103.p.ssafy.io:9000');
  const navigate = useNavigate();

  useEffect(() => {
    // 소켓 연결
    socket.on('connect', () => {
      console.log('Socket Connected');
    });

    // 특정 이벤트에 대한 메시지 수신
    socket.on('message', (data: string) => {
      console.log('Quiz data received:', data);
      // 종료 메시지가 수신했을 경우 종료
      if (quizContents === '다음에 같이 퀴즈 놀이 해요.') {
        // 4초 뒤 url 전환
        setTimeout(() => {
          socket.disconnect();
          navigate('/');
        }, 4000);
      } else {
        setQuizContents(data);
      }
    });

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ChildCenter ChildCenterContents={quizContents} />;
}

export default Quiz;
