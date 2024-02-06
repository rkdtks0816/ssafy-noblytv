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

  // 디버깅용 코드
  // useEffect(() => {
  //   if (socket) {
  //     const events = ['mode', 'mode_type', 'message'];
  //     events.forEach(event => {
  //       socket.on(event, data => {
  //         console.log(`이벤트 수신 [${event}]: `, data);
  //       });
  //     });
  //     return () => {
  //       events.forEach(event => {
  //         socket.off(event);
  //       });
  //     };
  //   }
  // }, [socket]);

  useEffect(() => {
    if (socket) {
      console.log('소켓 연결 확인', socket);
      const events = ['mode', 'mode_type', 'message'];
      events.forEach(event => {
        socket.on(event, data => {
          if (event === 'mode') {
            console.log('소켓 모드', event);
            switch (
              data // 'event'를 'data'로 변경
            ) {
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
          } else if (event === 'mode_type') {
            console.log('소켓 타입 ', event);
            switch (
              data // 'event'를 'data'로 변경
            ) {
              case 'news':
                console.log('소켓 타입 ', event);
                setNews('news');
                setCommercial('');
                break;
              case 'commercial':
                console.log('소켓 타입 ', event);
                setNews('');
                setCommercial('commercial');
                break;
              default:
                console.log('소켓 타입 ', event);
                setNews('');
                setCommercial('');
                break;
            }
          }
        });
      });
    }

    return () => {
      if (socket) {
        socket.off('mode');
        socket.off('mode_type');
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
