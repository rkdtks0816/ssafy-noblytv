import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';
import Gymnastics from '../../pages/gymnastics/Gymnastics';

function GymnasticsModal() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [gymContents, setGymContents] = useState<string>('');

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        setGymContents(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === '체조 시작 할께요!') {
          console.log('Gymnastic message:', data);
          setIsActive(false); // 모달창 숨기기
          setIsPlaying(true); // 체조 영상 활성화
        } else if (data === 'stop') {
          setIsActive(false); // 모달창 숨기기
          setIsPlaying(false); // 체조 영상 비활성화
        }
      });
    }

    return () => {
      socket?.off('message');
      setIsPlaying(false);
      setIsActive(false);
    };
  }, [socket]);

  const toggleModal = () => {
    setIsActive(!isActive);
  };
  // 빈 문자열을 출력하는 수신 메시지 설정
  const displayContent =
    gymContents !== 'mute' &&
    gymContents !== 'muteoff' &&
    gymContents !== 'start' &&
    gymContents !== 'stop'
      ? gymContents
      : '';

  return (
    <>
      <ChildModal
        title="체조"
        content={displayContent}
        isActive={isActive}
        onToggle={toggleModal}
      />

      {isPlaying && <Gymnastics />}
    </>
  );
}

export default GymnasticsModal;
