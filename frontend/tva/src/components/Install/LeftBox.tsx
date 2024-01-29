import LeftBoxStyle from './styles/LeftBoxStyle';

function LeftBox() {
  return (
    <LeftBoxStyle>
      <p>다음 작업을 따르세요</p>
      <ol>
        <li>카메라를 통해 QR 코드를 스캔하세요.</li>
        <li>노크하면 TV에서 코드가 표시됩니다.</li>
        <li>화면에 나오는 코드를 입력하세요.</li>
      </ol>
      <div>또는 아래 UI에 접속하여 코드를 확인하세요.</div>
      <div>http://192.168.100.72:5173/connect-tv</div>
      <div>코드번호: </div>
    </LeftBoxStyle>
  );
}

export default LeftBox;
