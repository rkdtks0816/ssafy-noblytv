// src/components/ChildModal/ExpandModal.tsx
import { forwardRef, useEffect, useRef } from 'react';
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
  ({ content, isActive, isFullScreen, message }, ref) => {
    let rightValue;

    if (isFullScreen) {
      rightValue = '0vw'; // 전체 화면일 경우
    } else if (isActive) {
      rightValue = '3vw'; // 활성화되었지만 전체 화면이 아닐 경우
    } else {
      rightValue = '-100%'; // 비활성화 상태일 경우
    }

    const dynamicStyle = {
      right: rightValue,
    };

    const fullScreenStyle = isFullScreen
      ? {
          position: 'fixed' as const,
          top: 0 as const,
          left: 0 as const,
          width: '100vw',
          height: '100vh',
          zIndex: 1000 as const,
        }
      : {};

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      console.log(message);
      console.log(content);
      if (videoRef.current) {
        videoRef.current.load();
        videoRef.current
          .play()
          .catch(error => console.error('Video play failed', error));
      }
    }, [message, content]);

    return (
      <div ref={ref} style={{ ...dynamicStyle, ...fullScreenStyle }}>
        <ChildModalBg isFullScreen={isFullScreen} isActive={isActive}>
          {isFullScreen && (
            <div
              style={{
                display: 'flex',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* 비디오를 감싸는 컨테이너에 flex, center 정렬을 적용하여 비디오가 중앙에 위치 */}
              <ChildModalDynamicContent
                style={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  controls
                  autoPlay
                  style={{
                    width: isFullScreen ? '100%' : 'auto',
                    height: isFullScreen ? '100%' : 'auto',
                    maxWidth: '100%', // 최대 너비 제한
                    maxHeight: '100%', // 최대 높이 제한
                    objectFit: 'contain', // 비디오 비율 유지
                  }}
                >
                  <source src={content} type="video/mp4" />
                </video>
              </ChildModalDynamicContent>
              {message !== '' && (
                <div style={{ flex: 1 }}>
                  <MessageBox isVisible>{message}</MessageBox>
                  <ChildModalImg />
                </div>
              )}
            </div>
          )}{' '}
          {!isFullScreen && (
            <>
              {/* 전체 화면이 아닐 때 */}
              <MessageBox isVisible={message !== ''}>{message}</MessageBox>
              <ChildModalImg />
            </>
          )}
        </ChildModalBg>
      </div>
    );
  },
);

export default ExpandModal;
