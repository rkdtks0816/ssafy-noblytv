import { useEffect, useState, useRef } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ExpandModal from '../ChildModal/ExpandModal';
import { BASE_URL, FILE_SEVER_PORT } from '../../constants/constants';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [videoPath, setVideoPath] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const modalRef = useRef<HTMLDivElement>(null);
  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        if (data === 'stop') {
          setIsFullScreen(false);
          setIsActive(true);
          setMessage('');
        } else if (/^(\/[\w\s-]+)+\.(mp4)$/.test(data)) {
          setVideoPath(data);
          setIsFullScreen(true);
          setIsActive(true); // 모달을 활성화 상태로 유지
          setMessage(''); // 비디오 재생 시 메시지 초기화
        } else {
          setMessage(data);
          setIsActive(true); // 메시지 수신 시 모달 활성화
        }
      });
    }
    return () => {
      if (socket) {
        socket.off('message');
      }
    };
  }, [socket]);

  useEffect(() => {
    // 비디오 재생이 끝났을 때 호출
    function handleVideoEnd() {
      socket?.emit('message', 'stop');
      setIsActive(true); // ExpandModal 활성화
    }

    const modalElement = modalRef.current;
    // modalElement가 존재하고, 현재 전체 화면 모드인 경우에만 실행
    if (modalElement && isFullScreen) {
      // 모달 내의 비디오 엘리먼트를 선택.
      const videoElement = modalElement.querySelector('video');
      // 비디오 재생이 끝났을 때 handleVideoEnd 함수를 호출
      videoElement?.addEventListener('ended', handleVideoEnd);
    }

    return () => {
      modalElement
        ?.querySelector('video')
        ?.removeEventListener('ended', handleVideoEnd);
    };
  }, [isFullScreen, socket]);

  return (
    <ExpandModal
      ref={modalRef}
      content={`${BASE_URL}:${FILE_SEVER_PORT}${videoPath}`}
      isActive={isActive}
      isFullScreen={isFullScreen}
      message={message}
    />
  );
}

export default FamilyVideoModal;
