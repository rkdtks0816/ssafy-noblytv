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
          setIsActive(false);
          setIsPlaying(true);
        } else if (data === 'stop') {
          setIsActive(false);
          setIsPlaying(false);
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

  return (
    <>
      <ChildModal
        title="체조"
        content={gymContents}
        isActive={isActive}
        onToggle={toggleModal}
      >
        {/* 기존 YouTube 컴포넌트 및 기타 내용 */}
      </ChildModal>

      {isPlaying && <Gymnastics />}
    </>
  );
}

export default GymnasticsModal;
