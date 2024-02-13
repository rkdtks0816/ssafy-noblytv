import { forwardRef } from 'react';
import { ChildModalProps } from '../../types/property';
import {
  ChildModalBg,
  ChildModalContent,
  ChildModalImg,
} from './ChildModalStyles';

const ChildModal = forwardRef<HTMLDivElement, ChildModalProps>(
  ({ content, isActive, isFullScreen }, ref) => {
    const getRightStyle = () => {
      if (isFullScreen) return '0';
      return isActive ? '3vw' : '-100%';
    };

    const displayContent =
      content.length > 140 ? `${content.substring(0, 140)}...` : content;

    return (
      <div ref={ref}>
        <ChildModalBg
          isFullScreen={isFullScreen}
          style={{
            right: getRightStyle(),
          }}
        >
          <ChildModalContent>{displayContent}</ChildModalContent>
          <ChildModalImg />
        </ChildModalBg>
      </div>
    );
  },
);

export default ChildModal;
