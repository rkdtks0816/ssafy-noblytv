import { useEffect, useRef, useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function GymnasticsModal() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [gymContents, setGymContents] = useState<string>('');

  const youtubePlayerRef = useRef<unknown>(null);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        setGymContents(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === '체조 시작 할께요!') {
          console.log('Gymnastic message:', data);
          setIsPlaying(true);
        } else if (data === '조금 있다가 꼭 체조 하셔야 해요!') {
          setIsActive(false);
          setIsPlaying(false);
        }
      });
    }

    return () => {
      socket?.off('message');
      setIsPlaying(false);
      setIsActive(false);
    };
  }, [socket]);

  useEffect(() => {
    console.log('isPlaying 상태:', isPlaying);
    if (isPlaying) {
      // YouTube 컴포넌트를 통한 영상 재생 로직을 여기에 추가
    }
  }, [isPlaying]);

  const Ready: YouTubeProps['onReady'] = event => {
    youtubePlayerRef.current = event.target;
  };

  const End: YouTubeProps['onEnd'] = () => {
    if (socket) {
      socket.emit('message', 'stop');
      console.log('체조 영상 종료');
      setIsPlaying(false);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  };

  const toggleModal = () => {
    setIsActive(!isActive);
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
    <ChildModal
      title="체조"
      content={gymContents}
      isActive={isActive}
      onToggle={toggleModal}
    >
      {isPlaying && (
        <YouTube
          videoId="m0tnbnuPiRw"
          opts={playerOptions}
          onReady={Ready}
          onEnd={End}
          style={{ width: '100%', height: '100%' }}
        />
      )}
    </ChildModal>
  );
}

export default GymnasticsModal;
