import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [familyVideos, setFamilyVideos] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState(false);

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (socket) {
      socket.on('message', (data: string) => {
        // 소켓통신에서 처음 데이터 수신했을 때 모달창 등장시키기
        console.log('Video data received:', data);
        setFamilyVideos(data);
        setIsActive(true);
        // 영상을 확인하겠다고 했을 때 처리
        if (data === 'yes') {
          setIsFullScreen(true);

          // BE에서 영상데이터 정보 가져오기
        } else if (
          data === 'stop' ||
          data === 'no' ||
          data === '나중에 또 봐요!'
        ) {
          setIsFullScreen(false);
          timer = setTimeout(() => {
            setIsActive(false);
          }, 7000);
        }
      });
    }

    return () => {
      socket?.off('message');
      if (timer) clearTimeout(timer);
    };
  }, [socket]);

  const toggleModal = () => {
    setIsActive(!isActive);
  };
  // 서버에서 받은 데이터가 비디오 경로인지 확인하기 위한 함수
  const isVideoPath = (path: string): boolean =>
    /^(http(s?):)([/|.|\w|\s|-])*\.(?:mp4|mov)$/.test(path);

  // displayContent 조건 수정
  const displayContent = (() => {
    if (['mute', 'muteoff', 'start', 'stop'].includes(familyVideos)) {
      return ''; // 이 경우엔 빈 문자열 반환
    }
    if (isVideoPath(familyVideos)) {
      // 비디오 경로일 경우, video 태그를 통해 비디오를 재생
      return (
        // 자막 추가해야한다는 접근성 지침. 여기에서는 무시
        // eslint-disable-next-line jsx-a11y/media-has-caption
        <video controls autoPlay>
          <source src={familyVideos} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return familyVideos; // 일반 텍스트일 경우
  })();

  return (
    <ChildModal
      content={displayContent}
      isActive={isActive}
      onToggle={toggleModal}
      isFullScreen={isFullScreen || false} // 기본값 false 설정
    />
  );
}

export default FamilyVideoModal;
