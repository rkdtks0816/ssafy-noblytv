import QRCode from 'qrcode.react';
import RightBoxStyle from './styles/RightBoxStyle';

function RightBox() {
  const Data = 'http://www.asdf.com';

  return (
    <RightBoxStyle>
      <QRCode value={Data} size={256} level="H" />
      <div>QR 코드를 스마트폰으로 스캔하세요</div>
    </RightBoxStyle>
  );
}

export default RightBox;
