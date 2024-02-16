import QRCode from 'qrcode.react';
import {
  BASE_PORT,
  BASE_URL,
  PATH_SENIOR_CONNECT,
} from '../../constants/constants';
import { QrcodeContainerS, QrcodeTextS } from './QrcodeStyle';

function QrCode({ uniqueCode }: { uniqueCode: string }) {
  const QrValue = `${BASE_URL}:${BASE_PORT}${PATH_SENIOR_CONNECT}?uniqueCode=${encodeURIComponent(uniqueCode)}`;
  const formattedCode = uniqueCode.toUpperCase();
  // 4글자씩 나누고 '-'로 이어붙이기
  const formattedResult = formattedCode.replace(/(\w{4})(\w{4})/, '$1-$2');
  return (
    <div>
      <QrcodeContainerS>
        <QRCode value={QrValue} size={200} />
      </QrcodeContainerS>
      <QrcodeTextS>{formattedResult}</QrcodeTextS>
    </div>
  );
}

export default QrCode;
