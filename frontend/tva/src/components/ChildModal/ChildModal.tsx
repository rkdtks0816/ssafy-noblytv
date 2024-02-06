import { ChildModalProps } from '../../types/property';
import {
  ChildModalBg,
  ChildModalContent,
  ChildModalImg,
  ChildModalTitle,
} from './ChildModalStyles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ChildModal({
  title,
  content,
  isActive,
  isFullScreen,
}: ChildModalProps) {
  const getRightStyle = () => {
    if (isFullScreen) return '0';
    return isActive ? '3vw' : '-100%';
  };

  return (
    <div>
      {/* <button type="button" onClick={onToggle}>
        Open Modal
      </button> */}
      <ChildModalBg
        isFullScreen={isFullScreen}
        style={{
          right: getRightStyle(),
        }}
      >
        <ChildModalTitle>{title}</ChildModalTitle>
        <ChildModalContent>{content}</ChildModalContent>
        <ChildModalImg />
      </ChildModalBg>
    </div>
  );
}
export default ChildModal;
