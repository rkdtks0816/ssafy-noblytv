import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function ScheduleModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [schedule, setSchedule] = useState<string>('');

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Diary data received:', data);
        setSchedule(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === 'stop') {
          setTimeout(() => {
            setIsActive(false);
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
  // 'mute' 또는 'muteoff'일 경우 빈 문자열을, 그렇지 않으면 diaryContents 값을 그대로 사용
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
    >
      {/* 추가적인 UI 요소 */}
    </ChildModal>
  );
}

export default ScheduleModal;
