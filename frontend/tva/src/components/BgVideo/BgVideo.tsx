import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import BgVideoS from './BgVideoStyle';
import useSocket from '../../hooks/useSocket';

interface BgVideoProps {
  currentMode: string;
}

function BgVideo({ currentMode }: BgVideoProps) {
  const [videoSrc, setVideoSrc] = useState('src/assets/news.mp4');
  const [isMuted, setIsmuted] = useState<boolean>(false);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (currentMode === 'news') {
      setVideoSrc('src/assets/news_closing.mp4');
    } else if (currentMode === 'commercial') {
      setVideoSrc('src/assets/advertisement_2.mp4');
    } else if (currentMode === 'main') {
      setVideoSrc('src/assets/news.mp4');
    }
  }, [currentMode]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        if (data === 'mute') {
          setIsmuted(false);
        } else if (data === 'muteoff') {
          setIsmuted(true);
        }
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [socket]);

  return (
    <div>
      <BgVideoS key={videoSrc} controls autoPlay muted={isMuted} loop>
        <source src={videoSrc} type="video/mp4" />
      </BgVideoS>
    </div>
  );
}

export default BgVideo;
