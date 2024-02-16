import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import {
  CommunityBoxS,
  CommunityCardS,
  CommunityHeaderS,
  CommunityWriterS,
  CommunityVideoS,
  CommunityAddBtnS,
} from './CommunityStyle';
import { FamilyPostsResType } from '../../../types/api_types';
import {
  API_PORT,
  API_POSTS,
  BASE_URL,
  FILE_SEVER_PORT,
} from '../../../constants/constants';
import useUserStore from '../../../store/useUserStore';
import MainMenuTitleStyle from '../../../components/MainMenuTitle/MainMenuTitleStyle';

function Community({
  postList,
  setIsLoading,
}: {
  postList: FamilyPostsResType[];
  setIsLoading: (isLoading: boolean) => void;
}) {
  const { grantType, accessToken, userId } = useUserStore();
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
    setIsLoading(true);
    const file = event.target.files?.[0]; // 사용자가 선택한 파일
    const formData = new FormData();

    if (file) {
      formData.append('userId', `${userId}`);
      formData.append('file', file);
      axios
        .post(`${BASE_URL}:${API_PORT}${API_POSTS}`, formData, {
          headers: {
            'Content-Type': 'text/plain;charset=UTF-8',
            Authorization: `${grantType} ${accessToken}`,
          },
        })
        .then(response => {
          setIsLoading(false);
          console.log(response);
        })
        .catch(err => {
          setIsLoading(false);
          console.error(err);
        });
    }
  };

  return (
    <CommunityBoxS>
      <MainMenuTitleStyle>가족앨범</MainMenuTitleStyle>
      {posts.map(post => (
        <CommunityCardS key={post.videoPath}>
          <CommunityHeaderS>
            <CommunityWriterS>{post.username}</CommunityWriterS>
          </CommunityHeaderS>
          <CommunityVideoS controls muted loop autoPlay playsInline>
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
