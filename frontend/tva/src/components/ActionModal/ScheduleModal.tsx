import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function ScheduleModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [schedule, setSchedule] = useState<string>('');

  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Diary data received:', data);
        setSchedule(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === 'stop') {
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
    schedule !== 'mute' &&
    schedule !== 'muteoff' &&
    schedule !== 'start' &&
    schedule !== 'stop'
      ? schedule
      : '';

  return (
    <ChildModal
      title="일정"
      content={displayContent}
      isActive={isActive}
      onToggle={toggleModal}
    />
  );
}

export default ScheduleModal;
