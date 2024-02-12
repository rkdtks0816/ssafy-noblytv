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

    return (
      <div ref={ref} style={dynamicStyle}>
        <ChildModalBg isFullScreen={isFullScreen} isActive={isActive}>
          {isFullScreen && (
            <div style={{ display: 'flex', width: '100%', height: '100%' }}>
              {/* 전체 화면일 때 비디오와 메시지 박스를 표시 */}
              <ChildModalDynamicContent style={{ flex: 1 }}>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  controls
                  autoPlay
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
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
          )}
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
