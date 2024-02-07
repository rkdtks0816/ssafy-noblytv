import { useEffect, useState, useRef } from 'react';
import { Socket } from 'socket.io-client';
import BgVideoS from './BgVideoStyle';
import useSocket from '../../hooks/useSocket';

interface BgVideoProps {
  currentMode: string;
}

function BgVideo({ currentMode }: BgVideoProps) {
  const [videoSrc, setVideoSrc] = useState('src/assets/news.mp4');
  const [isMuted, setIsmuted] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (currentMode === 'news') {
      setVideoSrc('src/assets/news_closing.mp4');
    } else if (currentMode === 'commercial') {
      setVideoSrc('src/assets/commercial.mp4');
    } else if (currentMode === 'main') {
      setVideoSrc('src/assets/news.mp4');
    }
  }, [currentMode]);

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
      <BgVideoS controls autoPlay muted={isMuted} loop ref={videoRef}>
        <source src={videoSrc} type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
