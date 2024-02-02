import { useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { ChildModalVideoBG, ChildModalVideo } from './ChildModalStyles';

function VideoModal() {
  const videoRef = useRef<HTMLVideoElement>(null); // 여기에서 타입을 지정
  const socket = io('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Socket Connected');
    });

    socket.on('videoStream', videoData => {
      if (videoRef.current) {
        videoRef.current.src = URL.createObjectURL(
          new Blob([videoData], { type: 'video/mp4' }),
        );
      }
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <ChildModalVideoBG>
        <ChildModalVideo />
      </ChildModalVideoBG>
    </div>
  );
}
export default VideoModal;
