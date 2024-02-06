import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function VideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [videoContents, setVideoContents] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Diary data received:', data);
        setVideoContents(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화
        if (data === 'start') {
          setIsFullScreen(true);
        } else if (data === 'stop') {
          setIsFullScreen(false);
          setIsActive(false);
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
      title="영상"
      content={videoContents}
      isActive={isActive}
      onToggle={toggleModal}
      isFullScreen={isFullScreen || false} // 기본값 false 설정
    >
      {/* 추가적인 UI 요소 */}
    </ChildModal>
  );
}

export default VideoModal;
