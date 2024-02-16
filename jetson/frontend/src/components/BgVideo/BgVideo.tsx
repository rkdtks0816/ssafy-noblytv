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
    } else if (currentMode === 'commercial') {
      setVideoSrc('src/assets/commercial.mp4');
    } else if (currentMode === 'main') {
      setVideoSrc('src/assets/news.mp4');
    }
  }, [currentMode, videoSrc]);

  // videoSrc가 변경될 때마다 실행
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // videoSrc가 변경될 때 비디오를 다시 로드
    }
  }, [videoSrc]);

  // 소켓을 통해 음소거 상태를 관리
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
      {/* 비디오 컴포넌트 랜더링 */}
      <BgVideoS controls autoPlay muted={isMuted} loop ref={videoRef}>
        {/* 비디오 소스 설정 */}
        <source src={videoSrc} type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
