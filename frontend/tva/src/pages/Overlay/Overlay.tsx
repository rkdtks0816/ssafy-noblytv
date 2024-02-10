import { useEffect, useMemo, useState } from 'react';
import ModalSwitcherComponent from '../../components/ActionModal/ModalSwitcher';
import BgVideoComponent from '../../components/BgVideo/BgVideoComponent';
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
            // console.log('activeModal', activeModal);
            break;
          case 'quiz':
            setActiveModal(2);
            // console.log('activeModal', activeModal);
            break;
          case 'diary':
            setActiveModal(3);
            // console.log('activeModal', activeModal);
            break;
          case 'schedule':
            setActiveModal(4);
            // console.log('activeModal', activeModal);
            break;
          case 'FamilyVideos':
            setActiveModal(5);
            // console.log('activeModal', activeModal);
            break;

          case 'news':
            setCurrentMode('news');
            // console.log('현재 모드', currentMode);
            break;
          case 'commercial':
            setCurrentMode('commercial');
            // console.log('현재 모드', currentMode);
            break;
          case 'main':
            setCurrentMode('main');
            setActiveModal(null);
            // console.log('현재 모드', currentMode);
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
  }, [socket]);

  // useMemo를 사용해서 currentMode가 바뀔때만 BgVideoComponent 계산해서 랜더링
  // 뉴스, 엔딩, 광고 모드 일 때 선택적으로 변경
  const bgVideoComponent = useMemo(
    () => <BgVideoComponent currentMode={currentMode} />,
    [currentMode],
  );

  // useMemo를 사용해서 activeModal 바뀔때만 modalSwitcherComponent 계산해서 랜더링
  // 체조, 퀴즈, 다이어리, 일정, 가족영상 일 때 선택적으로 변경
  const modalSwitcherComponent = useMemo(
    () => <ModalSwitcherComponent activeModal={activeModal} />,
    [activeModal],
  );

  return (
    <>
      {bgVideoComponent}
      {modalSwitcherComponent}
    </>
  );
}

export default Overlay;
