import { forwardRef } from 'react';
import { ChildModalProps } from '../../types/property';
import {
  ChildModalBg,
  ChildModalContent,
  ChildModalDynamicContent,
  ChildModalImg,
} from './ChildModalStyles';

const isVideoPath = (path: string): boolean =>
  /^(\/[\w\s-]+)+\.(mp4)$/.test(path);

const ExpandModal = forwardRef<HTMLDivElement, ChildModalProps>(
  ({ content, isActive, isFullScreen }, ref) => {
    const getRightStyle = () => {
      if (isFullScreen) return '0';
      return isActive ? '3vw' : '-100%';
    };

    return (
      <div ref={ref}>
        <ChildModalBg
          isFullScreen={isFullScreen}
          style={{
            right: getRightStyle(),
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            {isVideoPath(content) ? (
              // 비디오 경로일 경우 <video> 태그를 사용하여 재생
              <ChildModalDynamicContent>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                  controls
                  autoPlay
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                >
                  <source src={content as string} type="video/mp4" />
                </video>
              </ChildModalDynamicContent>
            ) : (
              // 문자열일 경우 기존의 ChildModalContent와 ChildModalImg를 사용.
              <div>
                <ChildModalContent>{content}</ChildModalContent>
                <ChildModalImg />
              </div>
            )}
          </div>
        </ChildModalBg>
      </div>
    );
  },
);

export default ExpandModal;
