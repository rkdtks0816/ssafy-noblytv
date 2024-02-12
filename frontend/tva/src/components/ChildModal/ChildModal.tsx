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

    return (
      <div ref={ref}>
        <ChildModalBg
          isFullScreen={isFullScreen}
          style={{
            right: getRightStyle(),
          }}
        >
          <ChildModalContent>{content}</ChildModalContent>
          <ChildModalImg />
        </ChildModalBg>
      </div>
    );
  },
);

export default ChildModal;
