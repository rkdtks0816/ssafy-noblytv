import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import {
  GymnasticsBoxS,
  GymnasticsCardS,
  GymnasticsDayS,
  GymnasticsHeaderS,
  GymnasticsKeywordS,
  GymnasticsTitleS,
  GymnasticsVideoS,
} from './GymnasticsCardStyle';
import { GymnasticsResType } from '../../types/api_types';
import getOldUserInfo from '../../utils/getOldUserInfo';
import GymnasticsKeyword from './GymnasticsKeyword';

function GymnasticsCard() {
  const [gymnastics, setGymnastics] = useState<GymnasticsResType[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string>('');
  const playerOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
    },
  };
  useEffect(() => {
    getOldUserInfo({
      successFunc: oldUserInfoData => {
        const dayOrder = ['월', '화', '수', '목', '금', '토', '일'];

        // 배열을 day 속성을 기준으로 정렬
        const sortedArray = oldUserInfoData.gymnastics.sort(
          (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day),
        );
        setGymnastics(sortedArray);
      },
    }).catch(error => console.error('Axios error:', error));
  }, []);

  const handleKeywordChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKeyword(event.target.value);
  };

  return (
    <GymnasticsBoxS>
      {gymnastics.map(gymnastic => (
        <GymnasticsCardS key={gymnastic.day}>
          <GymnasticsHeaderS>
            <GymnasticsDayS>{gymnastic.day}요일</GymnasticsDayS>
            <GymnasticsKeywordS
              value={selectedKeyword}
              onChange={handleKeywordChange}
            >
              <option value={gymnastic.keyword} disabled>
                키워드 선택
              </option>
              {/* 가능한 키워드 배열이 있다고 가정합니다. */}
              {GymnasticsKeyword.map(keyword => (
                <option key={keyword} value={keyword}>
                  {keyword}
                </option>
              ))}
            </GymnasticsKeywordS>
          </GymnasticsHeaderS>
          <GymnasticsVideoS>
            <YouTube
              videoId={gymnastic.videoId}
              opts={playerOptions}
              style={{ width: '100%', height: '100%' }}
            />
          </GymnasticsVideoS>
          <GymnasticsTitleS>{gymnastic.title}</GymnasticsTitleS>
        </GymnasticsCardS>
      ))}
    </GymnasticsBoxS>
  );
}

export default GymnasticsCard;
