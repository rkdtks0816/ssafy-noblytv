import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function QuizModal() {
  const [quizContents, setQuizContents] = useState<string>('');
  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Quiz data received:', data);
        setQuizContents(data);

        if (data === '다음에 같이 퀴즈 놀이 해요.' || data === 'stop') {
          setTimeout(() => {}, 5000);
        }
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [socket]);

  return (
    <ChildModal title="퀴즈" content={quizContents}>
      {/* 여기에 퀴즈 내용을 표시하는 추가적인 UI 요소를 넣을 수 있습니다. */}
    </ChildModal>
  );
}

export default QuizModal;
