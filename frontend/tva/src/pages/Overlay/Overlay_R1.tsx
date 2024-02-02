// Overlay.tsx
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useNavigate } from 'react-router-dom';
import BgVideo from '../../components/BgVideo/BgVideo';
import ChildModal from '../../components/ChildModal/ChildModal';

function OverlayR1() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const socket = io('http://i10c103.p.ssafy.io:9000');
  const navigate = useNavigate();

  useEffect(() => {
    // Socket.IO 이벤트 리스너 설정
    socket.on('mode', mode => {
      console.log('socket connect', mode);
      switch (mode) {
        case 'gymnastic':
          setActiveModal(1);
          break;
        case 'quiz':
          setActiveModal(2);
          break;
        case 'diary':
          setActiveModal(3);
          break;
        default:
          setActiveModal(null);
          break;
      }
    });
    return () => {
      socket.off('mode');
    };
  }, [socket]);

  useEffect(() => {
    if (activeModal !== null) {
      const timer = setTimeout(() => {
        switch (activeModal) {
          case 1:
            navigate('/gymnastics/start');
            break;
          case 2:
            navigate('/quiz');
            break;
          case 3:
            navigate('/diary');
            break;
          default:
            break;
        }
      }, 8000);

      return () => clearTimeout(timer);
    }
    return () => {};
  }, [activeModal, navigate]);

  const openModal = (modalId: number) => {
    setActiveModal(prevModal => (prevModal === modalId ? null : modalId));
  };

  return (
    <div>
      <BgVideo />
      <ChildModal
        title="체조"
        content="gymnastic"
        isActive={activeModal === 1}
        onToggle={() => openModal(1)}
      />
      <ChildModal
        title="퀴즈"
        content="quiz"
        isActive={activeModal === 2}
        onToggle={() => openModal(2)}
      />
      <ChildModal
        title="일기"
        content="diary"
        isActive={activeModal === 3}
        onToggle={() => openModal(3)}
      />
    </div>
  );
}

export default OverlayR1;
