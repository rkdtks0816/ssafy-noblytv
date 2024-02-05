import { ChildModalProps } from '../../types/property';
import {
  ChildModalBg,
  ChildModalContent,
  ChildModalImg,
  ChildModalTitle,
} from './ChildModalStyles';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ChildModal({ title, content, isActive, onToggle }: ChildModalProps) {
  return (
    <div>
      {/* <button type="button" onClick={onToggle}>
        Open Modal
      </button> */}
      <ChildModalBg style={{ right: isActive ? '3vw' : '-100%' }}>
        <ChildModalTitle>{title}</ChildModalTitle>
        <ChildModalContent>{content}</ChildModalContent>
        <ChildModalImg />
      </ChildModalBg>
    </div>
  );
}
export default ChildModal;
