import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [familyVideos, setFamilyVideos] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  const isVideoPath = (path: string): boolean =>
    /^(http(s?):)([/|.|\w|\s|-])*\.(?:mp4|mov)$/.test(path);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Video data received:', data);
        setFamilyVideos(data);
        setIsActive(true);

        if (isVideoPath(data)) {
          // 비디오 경로가 확인되었을 때 전체 화면 모드로 전환
          setIsFullScreen(true);
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

  const displayContent = (() => {
    if (['mute', 'muteoff', 'start', 'stop'].includes(familyVideos)) {
      return '';
    }
    if (isVideoPath(familyVideos)) {
      return (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video controls autoPlay>
          <source src={familyVideos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return familyVideos;
  })();

  return (
    <ChildModal
      content={displayContent}
      isActive={isActive}
      onToggle={toggleModal}
      isFullScreen={isFullScreen} // 직접 변경된 부분
    />
  );
}

export default FamilyVideoModal;
