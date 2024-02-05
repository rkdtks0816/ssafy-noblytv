import { useState, useRef } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Socket } from 'socket.io-client';
import ChildModal from '../ChildModal/ChildModal';
import useSocket from '../../hooks/useSocket';

function GymnasticsModal() {
  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const youtubePlayerRef = useRef<unknown>(null);

  const handleReady: YouTubeProps['onReady'] = event => {
    youtubePlayerRef.current = event.target;
    setIsPlaying(false);
  };

  const handleEnd: YouTubeProps['onEnd'] = () => {
    if (socket) {
      socket.emit('message', 'stop');
      console.log('unmount component');
    }
    // 모달을 닫는 로직을 추가하세요.
  };

  const playerOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      mute: !isPlaying,
    },
  };

  return (
    <ChildModal title="체조" content="체조 활동을 시작하세요.">
      <YouTube
        videoId="m0tnbnuPiRw"
        opts={playerOptions}
        onReady={handleReady}
        onEnd={handleEnd}
        style={{ width: '100%', height: '100%' }}
      />
    </ChildModal>
  );
}

export default GymnasticsModal;
