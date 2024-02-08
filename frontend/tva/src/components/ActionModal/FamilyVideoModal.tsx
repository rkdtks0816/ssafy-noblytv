import { useEffect, useState, useRef } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ExpandModal from '../ChildModal/ExpandModal';
import { BASE_URL, FILE_SEVER_PORT } from '../../constants/constants';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [familyVideos, setFamilyVideos] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [videoReadyToShow, setVideoReadyToShow] = useState(false); // 비디오 표시 준비 상태
  const modalRef = useRef<HTMLDivElement>(null);
  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  const isVideoPath = (path: string): boolean =>
    /^(\/[\w\s-]+)+\.(mp4)$/.test(path);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Video data received:', data);
        setFamilyVideos(data);
        setIsActive(true);
        setVideoReadyToShow(false);

        if (isVideoPath(data)) {
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

  useEffect(() => {
    const handleTransitionEnd = () => {
      if (isFullScreen) {
        setVideoReadyToShow(true);
      }
    };

    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.addEventListener('transitionend', handleTransitionEnd);
    }

    return () => {
      modalElement?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [isFullScreen]);

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  const displayContent = (() => {
    if (!videoReadyToShow) return ''; // 비디오 표시 준비가 되지 않았으면 빈 내용 반환

    if (['mute', 'muteoff', 'start', 'stop'].includes(familyVideos)) {
      return '';
    }
    if (isVideoPath(familyVideos)) {
      return (
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video
          controls
          autoPlay
          onEnded={() => {
            if (socket) {
              socket.emit('message', 'stop');
            }
          }}
          style={{
            width: isFullScreen ? '100dvw' : 'auto',
            height: isFullScreen ? '100dvh' : 'auto',
            objectFit: 'contain',
            maxHeight: '100dvh',
            maxWidth: '100dvw',
          }}
        >
          <source
            src={`${BASE_URL}:${FILE_SEVER_PORT}${familyVideos}`}
            type="video/mp4"
          />
        </video>
      );
    }
    return familyVideos;
  })();

  return (
    <ExpandModal
      ref={modalRef}
      content={displayContent}
      isActive={isActive}
      onToggle={toggleModal}
      isFullScreen={isFullScreen}
    />
  );
}

export default FamilyVideoModal;
