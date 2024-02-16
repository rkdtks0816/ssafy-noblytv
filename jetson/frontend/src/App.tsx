import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Socket } from 'socket.io-client';
import { useRef } from 'react';
import Overlay from './pages/Overlay/Overlay';
import SignInTV from './pages/SignInTV/SignInTV';
import useSocket from './hooks/useSocket';
import { BASE_URL, SOCKET_PORT } from './constants/constants';

// App 컴포넌트 내에서 라우터 설정
function App() {
  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  const messageSentRef = useRef(false);

  if (socket && !messageSentRef.current) {
    socket.emit('message', 'give me code');
    messageSentRef.current = true;
    // console.log(socket);
    socket.emit('message', 'connected');
    console.log(socket.emit('message', 'give me code'));
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overlay />} />
        <Route path="/sign-in" element={<SignInTV />} />
      </Routes>
    </Router>
  );
}

export default App;
