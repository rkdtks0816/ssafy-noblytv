// src/components/ChildModal/ExpandModal.tsx
import { forwardRef } from 'react';
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
    // isActive에 따른 스타일 동적 적용
    let rightValue;

    if (isFullScreen) {
      rightValue = '0vw';
    } else if (isActive) {
      rightValue = '3vw';
    } else {
      rightValue = '-100%';
    }

    const dynamicStyle = {
      right: rightValue,
    };

    return (
      <div ref={ref} style={dynamicStyle}>
        <ChildModalBg isFullScreen={isFullScreen} isActive={isActive}>
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
              <MessageBox isVisible={message !== ''} style={{ flex: 1 }}>
                {message}
              </MessageBox>
              <ChildModalImg />
            </div>
          )}
          {!isFullScreen && (
            <>
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
