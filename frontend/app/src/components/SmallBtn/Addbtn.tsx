import { ChangeEvent } from 'react';
import AddBtnStyle from './AddBtnStyle';

function AddBtn() {
  // 파일 선택기를 여는 함수
  const handleButtonClick = () => {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  };

  // 파일을 선택했을 때 호출되는 함수
  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // 사용자가 선택한 파일

    if (file) {
      // 파일 처리 로직을 여기에 작성...
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div>
      {/* <AddBtnStyle onClick={handleButtonClick}>+</AddBtnStyle>
      <input
        type="file"
        id="fileInput"
        style={{ display: 'none' }}
        onChange={handleFileSelect}
        accept="video/*" // 오직 동영상 파일만 선택 가능
      /> */}
    </div>
  );
}

export default AddBtn;
