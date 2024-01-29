import { QrcodeContainerS, QrcodeTextS } from './QrcodeStyle';
import QRCode from 'qrcode.react';

function QrCode() {
  const url = 'http://192.168.100.72:5173/senior-connect';
  return (
    <div>
      <QrcodeContainerS>
        <QRCode value={url} size={200} />
      </QrcodeContainerS>
      <QrcodeTextS>A9E9-L32B</QrcodeTextS>
    </div>
  );
}

export default QrCode;
