import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function DiaryModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [diaryContents, setDiaryContents] = useState<string>('');

  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Diary data received:', data);
        setDiaryContents(data); // 데이터 수신 시 diaryContents 값 update
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === 'stop') {
          setTimeout(() => {
            setIsActive(false); // data에 stop 으로 변했을 때 7초 후 모달 숨기기
          }, 7000);
        }
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [socket]);

  // 모달 활성화 비활성화
  const toggleModal = () => {
    setIsActive(!isActive);
  };
  // 빈 문자열을 출력하는 수신 메시지 설정
  const displayContent =
    diaryContents !== 'mute' &&
    diaryContents !== 'muteoff' &&
    diaryContents !== 'start' &&
    diaryContents !== 'stop'
      ? diaryContents
      : '';

  return (
    <ChildModal
      title="일기"
      content={displayContent}
      isActive={isActive}
      onToggle={toggleModal}
    />
  );
}

export default DiaryModal;
