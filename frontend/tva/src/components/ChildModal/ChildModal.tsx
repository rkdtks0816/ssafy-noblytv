// ChildModal.tsx
import { ChildModalProps } from '../../types/property';
import {
  ChildModalBg,
  ChildModalContent,
  ChildModalImg,
  ChildModalTitle,
} from './ChildModalStyles';

function ChildModal({ title, content, isActive, onToggle }: ChildModalProps) {
  return (
    <div>
      <button type="button" onClick={onToggle}>
        Open Modal
      </button>
      <ChildModalBg style={{ right: isActive ? '3vw' : '-100%' }}>
        <ChildModalTitle>{title}</ChildModalTitle>
        <ChildModalContent>{content}</ChildModalContent>
        <ChildModalImg />
      </ChildModalBg>
    </div>
  );
}
export default ChildModal;
