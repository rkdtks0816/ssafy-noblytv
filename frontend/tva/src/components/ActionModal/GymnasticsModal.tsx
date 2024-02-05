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
        } else if (data === '조금 있다가 꼭 체조 하셔야 해요!') {
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

  useEffect(() => {
    console.log('isPlaying 상태:', isPlaying);
    if (isPlaying) {
      // YouTube 컴포넌트를 통한 영상 재생 로직을 여기에 추가
    }
  }, [isPlaying]);

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
