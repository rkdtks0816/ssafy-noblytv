import QRCode from 'qrcode.react';
import { useEffect, useState } from 'react';
import { Socket } from 'socket.io-client';
import { BASE_URL, SOCKET_PORT } from '../../constants/constants';
import useSocket from '../../hooks/useSocket';
import {
  LeftBoxS,
  RightBoxS,
  SignInBgS,
  SignInBoxContentsS,
  SignInBoxSubContentsS,
  SignInBoxTitleS,
} from './SignInTVStyle';

function SignInTV() {
  const Url = 'http://i10c103.p.ssafy.io:5173/connect-tv';
  const [UniqueCode, setUniqueCode] = useState('1a2s3d4f');
  const QrValue = `${Url}?UniqueCode=${encodeURIComponent(UniqueCode)}`;
  const socket: Socket | null = useSocket(`${BASE_URL}:${SOCKET_PORT}`);

  useEffect(() => {
    if (socket) {
      // 서버로부터 'mode' 이벤트를 수신
      socket.on('mode', (TVCode: string) => {
        if (TVCode === 'tv') {
          // 'tvcode'를 UniqueCode로 설정
          setUniqueCode(TVCode);
        }
      });
    }

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      if (socket) {
        socket.off('mode');
      }
    };
  }, [socket]);
  // 반응형 크기를 위한 상태
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 창 크기가 변경될 때마다 상태 업데이트
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 반응형 크기 계산
  const qrCodeSize = windowWidth * 0.2;

  return (
    <SignInBgS>
      <LeftBoxS>
        <SignInBoxTitleS>다음 절차를 따르세요</SignInBoxTitleS>
        <SignInBoxContentsS>
          1. 카메라로 QR코드를 스캔하세요.
        </SignInBoxContentsS>
        <SignInBoxContentsS>2. 노블리 TV에 로그인 하세요.</SignInBoxContentsS>
        <SignInBoxContentsS>3. 다음 단계를 따르시오.</SignInBoxContentsS>

        <SignInBoxSubContentsS>
          또는, 아래 Url에 접속하여 고유 코드를 입력하세요.
          <br />
          <br />
          {Url}
          <br />
          TV고유코드 : {UniqueCode}
        </SignInBoxSubContentsS>
      </LeftBoxS>
      <RightBoxS>
        <QRCode value={QrValue} size={qrCodeSize} level="H" />
        <SignInBoxTitleS>{UniqueCode}</SignInBoxTitleS>
      </RightBoxS>
    </SignInBgS>
  );
}

export default SignInTV;
