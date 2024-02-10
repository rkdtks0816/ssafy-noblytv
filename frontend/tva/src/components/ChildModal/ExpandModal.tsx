// src/components/ChildModal/ExpandModal.tsx
import { forwardRef } from 'react';
import {
  ChildModalBg,
  ChildModalDynamicContent,
  SlideInMessage,
  ChildModalImg,
} from './ChildModalStyles';

interface ExpandModalProps {
  content: string;
  isActive: boolean;
  isFullScreen: boolean;
  message: string;
}

// 비디오 또는 메시지를 조건부로 표시
const ExpandModal = forwardRef<HTMLDivElement, ExpandModalProps>(
  ({ content, isActive, isFullScreen, message }, ref) => (
    // isActive 상태에 따라 모달 표시
    <div ref={ref} style={{ display: isActive ? 'block' : 'none' }}>
      <ChildModalBg isFullScreen={isFullScreen}>
        {/* 전체화면 모드일 때 */}
        {isFullScreen && (
          <div style={{ display: 'flex', width: '100%', height: '100%' }}>
            <ChildModalDynamicContent style={{ flex: 1 }}>
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video
                controls
                autoPlay
                style={{ width: '100%', height: 'auto' }}
              >
                <source src={content} type="video/mp4" />
              </video>
            </ChildModalDynamicContent>
            <SlideInMessage isVisible={message !== ''} style={{ flex: 1 }}>
              {message}
              <ChildModalImg />
            </SlideInMessage>
          </div>
        )}
        {/* 모달창 모드일 때 */}
        {!isFullScreen && (
          <SlideInMessage isVisible={message !== ''}>
            {message}
            <ChildModalImg />
          </SlideInMessage>
        )}
      </ChildModalBg>
    </div>
  ),
);

export default ExpandModal;
