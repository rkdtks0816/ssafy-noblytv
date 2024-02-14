// src/components/ActionModal/FamilyVideoModal.tsx
import { useEffect, useRef, useState } from 'react';
import { Socket } from 'socket.io-client';
import {
  BASE_URL,
  FILE_SEVER_PORT,
  SOCKET_PORT,
} from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import ExpandModal from '../ChildModal/ExpandModal';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [videoPath, setVideoPath] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const modalRef = useRef<HTMLDivElement>(null);
  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        if (data === 'stop') {
          setMessage(data);
          setIsFullScreen(false);
          setTimeout(() => {
            setIsActive(false);
          }, 5000);
        } else if (/^(\/[^/]+)+\.mp4$/.test(data)) {
          setMessage(''); // 비디오 재생 시 메시지 초기화
          setVideoPath(data);
          console.log(data);
          setIsFullScreen(true);
          setIsActive(true);
        } else if (data === '나중에 또 봐요!') {
          setMessage(data);
          setIsFullScreen(false);
          setTimeout(() => {
            setIsActive(false);
          }, 5000);
        } else {
          setMessage(data);
          console.log(data);
          setIsActive(true);
        }
      });
    }

    return () => {
      if (socket) {
        socket.off('message');
      }
    };
  }, [isFullScreen, socket]);

  // 빈 문자열을 출력하는 수신 메시지 설정
  const displayMessage =
    message !== 'mute' &&
    message !== 'muteoff' &&
    message !== 'start' &&
    message !== 'end' &&
    message !== 'stop'
      ? message
      : '';

  return (
    <ExpandModal
      ref={modalRef}
      content={`${BASE_URL}:${FILE_SEVER_PORT}${videoPath}`}
      isActive={isActive}
      isFullScreen={isFullScreen}
      message={displayMessage}
    />
  );
}

export default FamilyVideoModal;
