import { ChangeEvent, useEffect, useState } from 'react';
import {
  CommunityBoxS,
  CommunityCardS,
  CommunityHeaderS,
  CommunityWriterS,
  CommunityVideoS,
  CommunityAddBtnS,
} from './CommunityStyle';
import { FamilyPostsResType } from '../../../types/api_types';
import { BASE_URL, FILE_SEVER_PORT } from '../../../constants/constants';

function Community({ postList }: { postList: FamilyPostsResType[] }) {
  const [posts, setPosts] = useState<FamilyPostsResType[]>([]);

  useEffect(() => {
    setPosts(postList);
  }, [postList]);

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
      {posts.map(post => (
        <CommunityCardS>
          <CommunityHeaderS>
            <CommunityWriterS>{post.username}</CommunityWriterS>
          </CommunityHeaderS>
          <CommunityVideoS controls>
            <source
              src={`${BASE_URL}:${FILE_SEVER_PORT}${post.videoPath}`}
              type="video/mp4"
            />
          </CommunityVideoS>
        </CommunityCardS>
      ))}
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
