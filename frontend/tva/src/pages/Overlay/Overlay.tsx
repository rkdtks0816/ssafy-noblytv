import { useEffect, useState } from 'react';
import DiaryModal from '../../components/ActionModal/DiaryModal';
import GymnasticsModal from '../../components/ActionModal/GymnasticsModal';
import QuizModal from '../../components/ActionModal/QuizModal';
import BgVideo from '../../components/BgVideo/BgVideo';
import useSocket from '../../hooks/useSocket';

function Overlay() {
  const socket = useSocket('http://i10c103.p.ssafy.io:9000');
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [news, setNews] = useState('');
  const [commercial, setCommercial] = useState('');

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
          default:
            setActiveModal(null);
            break;
        }
      });
      socket.on('type', type => {
        console.log('socket type', type);
        switch (type) {
          case 'news':
            setNews(news);
            setCommercial('');
            break;
          case 'commercial':
            setNews('');
            setCommercial(commercial);
            break;
          default:
            setNews('');
            setCommercial('');
            break;
        }
      });
    }

    return () => {
      if (socket) {
        socket.off('mode');
        socket.off('type');
      }
    };
  }, [activeModal, commercial, news, socket]);

  const isMuted = activeModal !== null;

  return (
    <>
      <BgVideo muted={isMuted} news={news} commercial={commercial} />
      <div>
        {activeModal === 1 && <GymnasticsModal />}
        {activeModal === 2 && <QuizModal />}
        {activeModal === 3 && <DiaryModal />}
      </div>
    </>
  );
}

export default Overlay;
