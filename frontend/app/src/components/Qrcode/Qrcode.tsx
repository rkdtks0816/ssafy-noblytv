import QRCode from 'qrcode.react';

function QrCode() {
  const url = 'http://192.168.100.72:5173/senior-connect';
  return <QRCode value={url} />;
}

export default QrCode;
