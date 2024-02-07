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
    let timer: string | number | NodeJS.Timeout | undefined;
    if (socket) {
      socket.on('message', (data: string) => {
        // 소켓통신에서 처음 데이터 수신했을 때 모달창 등장시키기
        console.log('Video data received:', data);
        setVideoContents(data);
        setIsActive(true);
        // 영상을 확인하겠다고 했을 때 처리
        if (data === 'yes') {
          setIsFullScreen(true);

          // BE에서 영상데이터 정보 가져오기
        } else if (
          data === 'stop' ||
          data === 'no' ||
          data === '나중에 또 봐요!'
        ) {
          setIsFullScreen(false);
          timer = setTimeout(() => {
            setIsActive(false);
          }, 10000);
        }
      });
    }

    return () => {
      socket?.off('message');
      if (timer) clearTimeout(timer);
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
