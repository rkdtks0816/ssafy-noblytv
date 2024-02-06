import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function DiaryModal() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [diaryContents, setDiaryContents] = useState<string>('');

  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Diary data received:', data);
        setDiaryContents(data);
        setIsActive(true); // 데이터 수신 시 모달 활성화

        if (data === 'stop') {
          setIsActive(false); // 특정 조건에서 모달 비활성화
        }
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [socket]);

  const toggleModal = () => {
    setIsActive(!isActive);
  };

  return (
    <ChildModal
      title="일기"
      content={diaryContents}
      isActive={isActive}
      onToggle={toggleModal}
    >
      {/* 추가적인 UI 요소 */}
    </ChildModal>
  );
}

export default DiaryModal;
