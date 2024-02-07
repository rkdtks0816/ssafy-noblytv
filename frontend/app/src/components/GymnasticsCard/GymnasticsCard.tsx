import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import axios from 'axios';
import {
  GymnasticsBoxS,
  GymnasticsCardS,
  GymnasticsDayS,
  GymnasticsHeaderS,
  GymnasticsTitleS,
  GymnasticsVideoS,
  GymnasticsVideoS,
} from './GymnasticsCardStyle';
import { GymnasticsResType } from '../../types/api_types';
import getOldUserInfo from '../../utils/getOldUserInfo';
import GymnasticsKeyword from './GymnasticsKeyword';
import DropDown from '../DropDown/DropDown';
import { API_GYMNASTICS, API_PORT, BASE_URL } from '../../constants/constants';

function GymnasticsCard() {
  const [gymnastics, setGymnastics] = useState<GymnasticsResType[]>([]);
  const [selectedId, setSelectedId] = useState<number>();
  const [selectedKeyword, setSelectedKeyword] = useState<string>('');
  const [selectedDay, setSelectedDay] = useState<string>('');
  const playerOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
    },
  };

  const getOldUserInfoFunc = () => {
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
  };

  useEffect(() => {
    getOldUserInfoFunc();
  }, []);

  useEffect(() => {
    axios
      .put(
        `${BASE_URL}:${API_PORT}${API_GYMNASTICS}/${selectedId}?id=${selectedId}&newKeyword=${selectedKeyword}&newDay=${selectedDay}`,
        { headers: { 'Content-Type': 'application' } },
      )
      .then(() => {
        getOldUserInfoFunc();
      })
      .catch(error => {
        console.error(error);
      });
  }, [selectedId, selectedKeyword, selectedDay]);

  return (
    <GymnasticsBoxS>
      {gymnastics.map(gymnastic => (
        <GymnasticsCardS key={gymnastic.day}>
          <GymnasticsHeaderS>
            <GymnasticsDayS>{gymnastic.day}요일</GymnasticsDayS>
            <DropDown
              initValue={gymnastic.keyword}
              options={GymnasticsKeyword}
              setSelected={value => {
                setSelectedKeyword(value);
                setSelectedId(gymnastic.id);
                setSelectedDay(gymnastic.day);
              }}
            />
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
