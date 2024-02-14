// import { useEffect, useRef, useState } from 'react';
// import YouTube, { YouTubeProps } from 'react-youtube';
// import io from 'socket.io-client';
// import VideoModal from '../../components/ChildModal/StreamingModal';
// import { BASE_URL, SOCKET_PORT } from '../../constants/constants';

// function Gymnastics() {
//   const socket = io(`${BASE_URL}:${SOCKET_PORT}`);

//   const youtubePlayerRef = useRef<unknown>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(true);
//   const [showModal, setShowModal] = useState<boolean>(false);

//   // 체조 스트리밍 영상 9초 지연 후 등장하도록 추가
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowModal(true);
//     }, 10000);

//     return () => clearTimeout(timer);
//   }, []);

//   const handleReady: YouTubeProps['onReady'] = event => {
//     youtubePlayerRef.current = event.target;
//     setIsPlaying(true);
//   };

//   const handleEnd: YouTubeProps['onEnd'] = () => {
//     socket.emit('message', 'stop');
//     console.log('unmount component');
//   };

//   const playerOptions = {
//     width: '100%',
//     height: '100%',
//     playerVars: {
//       // autoplay: 1,
//       controls: 0,
//       modestbranding: 1,
//       mute: !isPlaying,
//     },
//   };

//   return (
//     <div>
//       <YouTube
//         videoId="q9qfWX4xnWA"
//         // videoId="WbVAticwz1Q" // 테스트용 15초 짜리 영상
//         opts={playerOptions}
//         onReady={handleReady}
//         onEnd={handleEnd}
//         style={{ width: '100vw', height: '100vh' }}
//       />
//       {showModal && <VideoModal />}
//     </div>
//   );
// }

// export default Gymnastics;
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

  // 체조 스트리밍 영상 9초 지연 후 등장하도록 추가
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
        console.log('Video ended');
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
