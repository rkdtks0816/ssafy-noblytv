import { useEffect, useState, useMemo } from 'react';
import useSocket from '../../hooks/useSocket';
import ModalSwitcherComponent from '../../components/ActionModal/ModalSwitcher';
import BgVideoComponent from '../../components/BgVideo/BgVideoComponent';

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

  const bgVideoComponent = useMemo(
    () => <BgVideoComponent currentMode={currentMode} />,
    [currentMode],
  );

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
