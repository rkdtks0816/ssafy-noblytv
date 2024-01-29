import QRCode from 'qrcode.react';

import RightBoxStyle from './styles/RightBoxStyle';

function RightBox() {
  const Url = 'http://i10c103.p.ssafy.io:5173/connect-tv';

  return (
    <RightBoxStyle>
      <QRCode value={Url} size={256} level="H" />

      <div>QR 코드를 스마트폰으로 스캔하세요</div>
    </RightBoxStyle>
  );
}

export default RightBox;
