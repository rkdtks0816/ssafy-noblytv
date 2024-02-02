import QRCode from 'qrcode.react';
import { useState, useEffect } from 'react';
import {
  SignInBgS,
  LeftBoxS,
  RightBoxS,
  SignInBoxTitleS,
  SignInBoxContentsS,
  SignInBoxSubContentsS,
} from './SignInTVStyle';

function SignInTV() {
  // const Url = 'http://i10c103.p.ssafy.io:5173/connect-tv';
  const Url = 'http://192.168.100.72:5173/connect-tv';
  const UniqueCode = '3NK1 - 0WSE3';
  const QrValue = `${Url}?UniqueCode=${encodeURIComponent(UniqueCode)}`;

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
