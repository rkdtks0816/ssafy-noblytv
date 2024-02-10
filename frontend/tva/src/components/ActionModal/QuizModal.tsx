import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function QuizModal() {
  const [quizContents, setQuizContents] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);

  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Quiz data received:', data);
        setQuizContents(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === '다음에 같이 퀴즈 놀이 해요.' || data === 'stop') {
          setTimeout(() => {
            setIsActive(false); // 7초 후 모달 숨기기
          }, 7000);
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

  // 빈 문자열을 출력하는 수신 메시지 설정
  const displayContent =
    quizContents !== 'mute' &&
    quizContents !== 'muteoff' &&
    quizContents !== 'start' &&
    quizContents !== 'stop'
      ? quizContents
      : '';

  return (
    <ChildModal
      title="퀴즈"
      content={displayContent}
      isActive={isActive}
      onToggle={toggleModal}
    />
  );
}

export default QuizModal;
