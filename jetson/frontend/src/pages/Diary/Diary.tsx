import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import ChildCenter from '../../components/ChildCenter/ChildCenter';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';

function Diary() {
  const [diaryContents, setDiaryContents] = useState<string>('');
  const socket = io(`${BASE_URL}:${SOCKET_PORT}`);
  const navigate = useNavigate();

  useEffect(() => {
    // 소켓 연결
    socket.on('connect', () => {
      console.log('Socket Connected');
    });

    // 특정 이벤트에 대한 메시지 수신
    socket.on('message', (data: string) => {
      console.log('Diary data received:', data);
      if (data === 'stop') {
        socket.disconnect();
        navigate('/');
      } else {
        setDiaryContents(data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ChildCenter ChildCenterContents={diaryContents} />;
}

export default Diary;
