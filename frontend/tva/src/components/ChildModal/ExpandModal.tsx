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

    // eslint-disable-next-line consistent-return
    useEffect(() => {
      const currentVideo = videoRef.current;

      console.log(message);
      console.log(content);
      if (currentVideo) {
        const handleVideoEnd = () => {
          currentVideo.pause();
          if (socket) {
            socket.emit('message', 'stop');
          }
        };

        currentVideo.addEventListener('ended', handleVideoEnd);

        // 비디오를 로드하고 재생합니다.
        currentVideo.load();
        currentVideo
          .play()
          .catch(error => console.error('Video play failed', error));

        return () => {
          currentVideo.removeEventListener('ended', handleVideoEnd);
        };
      }
    }, [message, content, socket]);

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
