// ChildModal.tsx
import { ChildModalProps } from '../../types/property';
import { ChildModalBg } from './ChildModalStyles';

function ChildModal({ isActive, onToggle }: ChildModalProps) {
  return (
    <div>
      <button type="button" onClick={onToggle}>
        Open Modal
      </button>
      <ChildModalBg style={{ right: isActive ? '3vw' : '-100%' }}>
        dsadasdas
      </ChildModalBg>
    </div>
  );
}
export default ChildModal;
