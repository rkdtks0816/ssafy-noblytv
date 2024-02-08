import { forwardRef } from 'react';
import { ChildModalProps } from '../../types/property';
import {
  ChildModalBg,
  ChildModalContent,
  ChildModalImg,
} from './ChildModalStyles';

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
            <ChildModalContent>{content}</ChildModalContent> {/* 비디오 주소 */}
            <div>
              <ChildModalContent>문자열</ChildModalContent> {/* 문자열 */}
              <ChildModalImg />
            </div>
          </div>
        </ChildModalBg>
      </div>
    );
  },
);

export default ExpandModal;
