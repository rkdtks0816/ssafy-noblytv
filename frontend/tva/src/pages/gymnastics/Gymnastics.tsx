import { useState, useRef } from 'react';
import YouTube, { Options } from 'react-youtube';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Gymnastics() {
  const navigate = useNavigate();
  const youtubePlayer = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const onReady = (event: any) => {
    youtubePlayer.current = event.target;

    // // 음성 신호 수신 후 동영상을 재생/일시 정지
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.post('/send-voice-signal', { isPlaying });
    //     const { success } = response.data;

    //     if (success) {
    //       setIsPlaying(!isPlaying);
    //     }
    //   } catch (error) {
    //     console.error('Error sending voice signal:', error);
    //   }
    // };

    // // 초기 로딩 시 한 번만 호출
    // fetchData();
    setIsPlaying(false);
  };

  const onEnd = () => {
    navigate('/');
  };

  const opts: Options = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      mute: !isPlaying, // 음소거 상태에 따라 설정
    },
  };

  return (
    <div>
      <YouTube
        videoId="m0tnbnuPiRw"
        opts={opts}
        onReady={onReady}
        onEnd={onEnd}
        style={{ width: '100vw', height: '100vh' }}
      />
    </div>
  );
}

export default Gymnastics;
