import Cookies from 'js-cookie';
import { ChangeEvent } from 'react';
import {
  CommunityBoxS,
  CommunityCardS,
  CommunityHeaderS,
  CommunityWriterS,
  CommunityVideoS,
  CommunityAddBtnS,
} from './CommunityStyle';

function Community() {
  const oldUsername = Cookies.get('oldUsername');

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
    <CommunityBoxS>
      <CommunityCardS>
        <CommunityHeaderS>
          <CommunityWriterS>{oldUsername}</CommunityWriterS>
        </CommunityHeaderS>
        <CommunityVideoS controls>
          <source src="/src/assets/2024-02-01_summary.mp4" type="video/mp4" />
        </CommunityVideoS>
      </CommunityCardS>
      <CommunityCardS>
        <CommunityHeaderS>
          <CommunityWriterS>{oldUsername}</CommunityWriterS>
        </CommunityHeaderS>
        <CommunityVideoS controls>
          <source src="/src/assets/2024-02-02_summary.mp4" type="video/mp4" />
        </CommunityVideoS>
      </CommunityCardS>
      <CommunityAddBtnS onClick={handleButtonClick}>
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileSelect}
          accept="video/*"
        />
      </CommunityAddBtnS>
    </CommunityBoxS>
  );
}

export default Community;
