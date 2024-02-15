// src/components/ChildModal/ExpandModal.tsx
import { forwardRef, useEffect, useRef } from 'react';
import { Socket } from 'socket.io-client';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import useSocket from '../../hooks/useSocket';

import {
  ChildModalBg,
  ChildModalDynamicContent,
  ChildModalImg,
  MessageBox,
} from './ChildModalStyles';

interface ExpandModalProps {
  content: string;
  isActive: boolean;
  isFullScreen: boolean;
  message: string;
}

const ExpandModal = forwardRef<HTMLDivElement, ExpandModalProps>(
  ({ content, isActive, isFullScreen, message }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

    //  // content가 변경될 때마다 비디오 소스 업데이트
    useEffect(() => {
      const currentVideo = videoRef.current;
      if (currentVideo) {
        currentVideo.load(); // 새 소스로 비디오 로드
        currentVideo
          .play()
          .catch(error => console.error('Video play failed', error)); // 자동 재생 정책으로 인한 에러 처리
      }
    }, [content]);

    // eslint-disable-next-line consistent-return
    useEffect(() => {
      // 비디오 재생 종료 이벤트 핸들러 정의
      const currentVideo = videoRef.current;

      // 비디오 종료시 소켓 통신 이벤트 정의
      function handleVideoEnd() {
        if (socket) {
          socket.emit('message', 'end');
          socket.emit('message', '');
          console.log('socket', socket);
        }
      }

      if (currentVideo) {
        // 기존에 등록된 'ended' 이벤트 리스너 제거
        currentVideo.removeEventListener('ended', handleVideoEnd);
        // 'ended' 이벤트에 핸들러가 실행되도록 등록
        currentVideo.addEventListener('ended', handleVideoEnd);

        return () => {
          if (currentVideo) {
            currentVideo.removeEventListener('ended', handleVideoEnd);
          }
        };
      }
    }, [socket, content]);

    return (
      <ChildModalBg isFullScreen={isFullScreen} isActive={isActive}>
        <ChildModalDynamicContent>
          {isFullScreen ? (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <div
                style={{
                  flex: 1,
                  width: '100%', // 부모 컨테이너의 크기에 맞춤
                  height: '100%', // 부모 컨테이너의 크기에 맞춤
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  style={{
                    width: '100%', // 최대 가능한 너비
                    height: 'auto', // 원본 비율 유지를 위해 auto
                    maxWidth: '100%', // 모달창 너비를 초과하지 않음
                    maxHeight: '100%', // 모달창 높이를 초과하지 않음
                    objectFit: 'contain', // 원본 비율 유지
                  }}
                >
                  <source src={content} type="video/mp4" />
                </video>
              </div>
              {message !== '' && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                  }}
                >
                  <MessageBox isVisible>{message}</MessageBox>
                  <ChildModalImg />
                </div>
              )}
            </div>
          ) : (
            // 전체 화면 모드가 아닐 때 메시지 박스와 이미지 표시
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <MessageBox isVisible={message !== ''}>{message}</MessageBox>
              <ChildModalImg />
            </div>
          )}
        </ChildModalDynamicContent>
      </ChildModalBg>
    );
  },
);

export default ExpandModal;
