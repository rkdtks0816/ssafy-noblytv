import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import VideoModal from '../../components/ChildModal/StreamingModal';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import GymnasticsContainer from './GymnasticsStyle';

function Gymnastics() {
  const socket = io(`${BASE_URL}:${SOCKET_PORT}`);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);

  // 체조 스트리밍 영상 4초 지연 후 등장하도록 추가
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onended = () => {
        socket.emit('message', 'stop');
      };
    }
  }, [socket, videoRef]);

  return (
    <GymnasticsContainer>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          backgroundColor: 'black',
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          width="100%"
          height="100%"
          autoPlay
          muted={!isPlaying}
          style={{ width: '100vw', height: '100vh' }}
          onCanPlay={() => setIsPlaying(true)}
        >
          <source src="src/assets/gymnastic_sample.mp4" type="video/mp4" />
        </video>
        {showModal && <VideoModal />}
      </div>
    </GymnasticsContainer>
  );
}

export default Gymnastics;
