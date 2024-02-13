import { useEffect, useRef, useState } from 'react';
import { Socket } from 'socket.io-client';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import BgVideoS from './BgVideoStyle';

interface BgVideoProps {
  currentMode: string;
}

function BgVideo({ currentMode }: BgVideoProps) {
  const [videoSrc, setVideoSrc] = useState('src/assets/news.mp4');
  const [isMuted, setIsmuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  useEffect(() => {
    if (currentMode === 'news') {
      setVideoSrc('src/assets/news_closing.mp4');
      console.log(currentMode);
      console.log(videoSrc);
    } else if (currentMode === 'commercial') {
      setVideoSrc('src/assets/commercial.mp4');
      console.log(currentMode);
      console.log(videoSrc);
    } else if (currentMode === 'main') {
      setVideoSrc('src/assets/news.mp4');
    }
  }, [currentMode, videoSrc]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // videoSrc가 변경될 때 비디오를 다시 로드합니다.
    }
  }, [videoSrc]); // videoSrc가 변경될 때마다 실행

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        if (data === 'mute') {
          setIsmuted(true);
        } else if (data === 'muteoff') {
          setIsmuted(false);
        }
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [socket]);

  return (
    <div>
      <BgVideoS autoPlay muted={isMuted} loop ref={videoRef}>
        <source src={videoSrc} type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
