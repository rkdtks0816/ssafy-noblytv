import { useState, useEffect } from 'react';
// import axios from 'axios';
import Cookies from 'js-cookie';
// import { BASE_URL, API_PORT, API_SENIOR } from '../../constants/constants';
import {
  GymnasticsBoxS,
  GymnasticsCardS,
  GymnasticsDayS,
  GymnasticsHeaderS,
  GymnasticsKeywordS,
  GymnasticsTitleS,
} from './GymnasticsCardStyle';
import { GymnasticsType } from '../../types/api_types';
import gymnasticsInitKeywords from '../../pages/senior_sign_up/gymnasticsInitKeywords';

function GymnasticsCard() {
  const userId = Cookies.get('userId');
  const oldUserId = Cookies.get('oldUserId');
  const [gymnastics, setGymnastics] = useState<GymnasticsType[]>([]);
  useEffect(() => {
    // axios
    //   .get<{ gymnastics: GymnasticsType[] }>(
    //     `${BASE_URL}:${API_PORT}${API_SENIOR}/${oldUserId}?userId=${userId}`,
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //     setGymnastics(response.data.gymnastics);
    //   })
    //   .catch(err => {
    //     console.error('운동 정보를 가져오는 중 에러가 발생했습니다.', err);
    //   });
    setGymnastics(gymnasticsInitKeywords);
  }, [oldUserId, userId]);

  return (
    <GymnasticsBoxS>
      {gymnastics.map(gymnastic => (
        <GymnasticsCardS key={gymnastic.day}>
          <GymnasticsHeaderS>
            <GymnasticsDayS>{gymnastic.day}요일</GymnasticsDayS>
            <GymnasticsKeywordS>{gymnastic.keyword}</GymnasticsKeywordS>
          </GymnasticsHeaderS>
          <GymnasticsTitleS>{gymnastic.title}</GymnasticsTitleS>
        </GymnasticsCardS>
      ))}
    </GymnasticsBoxS>
  );
}

export default GymnasticsCard;
