// Overlay.tsx
import { useState, useEffect } from 'react';
import BgVideo from '../../components/BgVideo/BgVideo';
import ChildModal from '../../components/ChildModal/ChildModal';

function Overlay() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (modalId: number) => {
    setActiveModal(prevModal => (prevModal === modalId ? null : modalId));
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setActiveModal(1); // 7초 후에 1번 모달 열기
    }, 7000);

    const timer2 = setTimeout(() => {
      setActiveModal(null); // 12초 후에 1번 모달 닫기
    }, 12000);

    const timer3 = setTimeout(() => {
      setActiveModal(null); // 14초 후에 1번 모달 닫기
      setActiveModal(2); // 그리고 2번 모달 열기
    }, 14000);

    const timer4 = setTimeout(() => {
      setActiveModal(null); // 12초 후에 1번 모달 닫기
    }, 19000);

    const timer5 = setTimeout(() => {
      setActiveModal(null); // 21초 후에 2번 모달 닫기
    }, 21000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

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
        content="약 아직 안드셨죠?!?!?!?"
        isActive={activeModal === 2}
        onToggle={() => openModal(2)}
      />
    </div>
  );
}

export default Overlay;
