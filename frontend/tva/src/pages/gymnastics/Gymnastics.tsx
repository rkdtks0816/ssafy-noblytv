import { useState, useRef, useEffect } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import VideoModal from '../../components/ChildModal/StreamingModal';

function Gymnastics() {
  const socket = io('http://i10c103.p.ssafy.io:9000');

  const navigate = useNavigate();
  const youtubePlayerRef = useRef<unknown>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleReady: YouTubeProps['onReady'] = event => {
    youtubePlayerRef.current = event.target;
    setIsPlaying(false);
  };

  const handleEnd: YouTubeProps['onEnd'] = () => {
    socket.emit('message', 'stop');
    console.log('unmount component');
    socket.disconnect();
    navigate('/R1');
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
    <div>
      <YouTube
        videoId="m0tnbnuPiRw"
        opts={playerOptions}
        onReady={handleReady}
        onEnd={handleEnd}
        style={{ width: '100vw', height: '100vh' }}
      />
      {showModal && <VideoModal />}
    </div>
  );
}

export default Gymnastics;
