import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function QuizModal() {
  const [quizContents, setQuizContents] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Quiz data received:', data);
        setQuizContents(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === '다음에 같이 퀴즈 놀이 해요.' || data === 'stop') {
          setTimeout(() => {}, 5000);
          setIsActive(false); // 특정 조건에서 모달 비활성화
        }
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [socket]);

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  return (
    <ChildModal
      title="퀴즈"
      content={quizContents}
      isActive={isActive}
      onToggle={toggleModal}
    >
      {/* 추가적인 UI 요소 */}
    </ChildModal>
  );
}

export default QuizModal;
