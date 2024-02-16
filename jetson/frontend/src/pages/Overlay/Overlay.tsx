import { useEffect, useMemo, useState } from 'react';
import { Socket } from 'socket.io-client';
import ModalSwitcherComponent from '../../components/ActionModal/ModalSwitcher';
import BgVideoSelector from '../../components/BgVideo/BgVideoSelector';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import useSocket from '../../hooks/useSocket';

function Overlay() {
  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [currentMode, setCurrentMode] = useState('');

  useEffect(() => {
    if (socket) {
      socket.on('mode', mode => {
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
          case 'schedule':
            setActiveModal(4);
            break;
          case 'community':
            setActiveModal(5);
            break;

          case 'news':
            setCurrentMode('news');
            break;
          case 'commercial':
            setCurrentMode('commercial');
            break;
          case 'main':
            setCurrentMode('main');
            setActiveModal(null);
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
    () => <BgVideoSelector currentMode={currentMode} />,
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
