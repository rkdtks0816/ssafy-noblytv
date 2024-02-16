import { useEffect, useRef, useState } from 'react';
import { Socket } from 'socket.io-client';
import {
  BASE_URL,
  FILE_SEVER_PORT,
  SOCKET_PORT,
} from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import ExpandChildModal from '../ChildModal/ExpandChildModal';

function FamilyVideoModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [videoPath, setVideoPath] = useState<string>('');
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const modalRef = useRef<HTMLDivElement>(null); // // 모달을 참조하기 위한 ref. ref 가 변해도 re-rendering 되지 않게 처리
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
    message !== 'yes' &&
    message !== 'stop'
      ? message
      : '';

  return (
    <ExpandChildModal
      ref={modalRef} // 모달 참조 설정
      content={`${BASE_URL}:${FILE_SEVER_PORT}${videoPath}`} // 모달에 표시할 비디오 경로 설정
      isActive={isActive} // 모달의 활성화 상태 전달
      isFullScreen={isFullScreen} // 전체 화면 모드 상태 전달
      message={displayMessage} // 표시할 메시지 전달
    />
  );
}

export default FamilyVideoModal;
