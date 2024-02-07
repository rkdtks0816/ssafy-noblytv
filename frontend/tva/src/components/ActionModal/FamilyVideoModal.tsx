import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [familyVideos, setFamilyVideos] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (socket) {
      socket.on('message', (data: string) => {
        // 소켓통신에서 처음 데이터 수신했을 때 모달창 등장시키기
        console.log('Video data received:', data);
        setFamilyVideos(data);
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
          }, 7000);
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

  // 'mute' 또는 'muteoff'일 경우 빈 문자열을, 그렇지 않으면 videoContents 값을 그대로 사용
  const displayContent =
    familyVideos !== 'mute' &&
    familyVideos !== 'muteoff' &&
    familyVideos !== 'start' &&
    familyVideos !== 'stop'
      ? familyVideos
      : '';

  return (
    <ChildModal
      title="영상"
      content={displayContent}
      isActive={isActive}
      onToggle={toggleModal}
      isFullScreen={isFullScreen || false} // 기본값 false 설정
    />
  );
}

export default FamilyVideoModal;
