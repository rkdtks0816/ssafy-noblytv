import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

function useSocket(url: string): Socket | null {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketIo = io(url);

    setSocket(socketIo);

    return () => {};
  }, []);

  return socket;
}

export default useSocket;

