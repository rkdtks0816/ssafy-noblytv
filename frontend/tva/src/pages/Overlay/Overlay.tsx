import { useEffect, useState } from 'react';
import DiaryModal from '../../components/ActionModal/DiaryModal';
import GymnasticsModal from '../../components/ActionModal/GymnasticsModal';
import QuizModal from '../../components/ActionModal/QuizModal';
import BgVideo from '../../components/BgVideo/BgVideo';
import useSocket from '../../hooks/useSocket';

function Overlay() {
  const socket = useSocket('http://i10c103.p.ssafy.io:9000');
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [currentMode, setCurrentMode] = useState('');

  useEffect(() => {
    if (socket) {
      console.log(socket);
      socket.on('mode', mode => {
        // console.log('socket connect', mode);
        switch (mode) {
          case 'gymnastic':
            setActiveModal(1);
            console.log('activeModal', activeModal);
            break;
          case 'quiz':
            setActiveModal(2);
            console.log('activeModal', activeModal);
            break;
          case 'diary':
            setActiveModal(3);
            console.log('activeModal', activeModal);
            break;
          case 'news':
            setCurrentMode('news');
            console.log('현재 모드', currentMode);
            break;
          case 'commercial':
            setCurrentMode('commercial');
            console.log('현재 모드', currentMode);
            break;
          default:
            setActiveModal(null);
            break;
        }
      });
    }

    return () => {
      if (socket) socket.off('mode');
    };
  }, [activeModal, currentMode, socket]);

  const isMuted = activeModal !== null;

  return (
    <>
      <BgVideo muted={isMuted} currentMode={currentMode} />
      <div>
        {activeModal === 1 && <GymnasticsModal />}
        {activeModal === 2 && <QuizModal />}
        {activeModal === 3 && <DiaryModal />}
      </div>
      {/* 테스트용 버튼 */}
      <button type="button" onClick={() => setCurrentMode('news')}>
        뉴스 모드 설정
      </button>
      <button type="button" onClick={() => setCurrentMode('commercial')}>
        커머셜 모드 설정
      </button>
    </>
  );
}

export default Overlay;
