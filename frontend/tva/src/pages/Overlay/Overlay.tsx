// Overlay.tsx
import { useState } from 'react';
import BgVideo from '../../components/BgVideo/BgVideo';
import ChildModal from '../../components/ChildModal/ChildModal';

function Overlay() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (modalId: number) => {
    setActiveModal(prevModal => (prevModal === modalId ? null : modalId));
  };

  return (
    <div>
      <BgVideo />
      <ChildModal
        title="할아버지!"
        content="움직일 시간이야!"
        isActive={activeModal === 1}
        onToggle={() => openModal(1)}
      />
      <ChildModal
        title="할아버지!"
        content="약 아직 안드셨죠?!?!?!?;ㅑ"
        isActive={activeModal === 2}
        onToggle={() => openModal(2)}
      />
    </div>
  );
}

export default Overlay;
