import { useState, useEffect } from 'react';
import useSocket from '../../hooks/useSocket';
// import GymnasticsModal from '../../components/GymnasticsModal';
import QuizModal from '../../components/ActionModal/QuizModal';
import DiaryModal from '../../components/ActionModal/DiaryModal';

function OverlayR1() {
  const socket = useSocket('http://i10c103.p.ssafy.io:9000');
  const [activeModal, setActiveModal] = useState<number | null>(null);

  useEffect(() => {
    if (socket) {
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
    }

    return () => {
      socket?.off('mode');
    };
  }, [socket]);

  return (
    <div>
      {/* {activeModal === 1 && <GymnasticsModal />} */}
      {activeModal === 2 && <QuizModal />}
      {activeModal === 3 && <DiaryModal />}
    </div>
  );
}

export default OverlayR1;
