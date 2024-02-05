import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import useSocket from '../../hooks/useSocket';
import ChildModal from '../ChildModal/ChildModal';

function DiaryModal() {
  const [diaryContents, setDiaryContents] = useState<string>('');
  const socket: Socket | null = useSocket('http://i10c103.p.ssafy.io:9000');

  useEffect(() => {
    if (socket) {
      socket.on('message', (data: string) => {
        console.log('Diary data received:', data);
        setDiaryContents(data);

        if (data === 'stop') {
          setTimeout(() => {}, 5000);
        }
      });
    }

    return () => {
      socket?.off('message');
    };
  }, [socket]);

  return (
    <ChildModal title="일기" content={diaryContents}>
      {/* 여기에 일기 내용을 표시하는 추가적인 UI 요소를 넣을 수 있습니다. */}
    </ChildModal>
  );
}

export default DiaryModal;
