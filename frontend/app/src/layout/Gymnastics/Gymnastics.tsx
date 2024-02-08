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
} from './GymnasticsStyle';
import { GymnasticsResType } from '../../types/api_types';
import getOldUserInfo from '../../utils/getOldUserInfo';
import GymnasticsKeyword from './GymnasticsKeyword';
import DropDown from '../../components/DropDown/DropDown';
import { API_GYMNASTICS, API_PORT, BASE_URL } from '../../constants/constants';

function Gymnastics() {
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

  const onClickKeyword = ({
    value,
    gymnastic,
  }: {
    value: string;
    gymnastic: GymnasticsResType;
  }) => {
    setSelectedKeyword(value);
    setSelectedId(gymnastic.id);
    setSelectedDay(gymnastic.day);

    axios
      .put(
        `${BASE_URL}:${API_PORT}${API_GYMNASTICS}/${selectedId}`,
        {
          id: selectedId,
          newKeyword: selectedKeyword,
          newDay: selectedDay,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        getOldUserInfoFunc();
      })
      .catch(error => {
        console.error(error);
      });
  };

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
                onClickKeyword({ value, gymnastic });
              }}
            />
          </GymnasticsHeaderS>
          <GymnasticsVideoS>
            <YouTube videoId={gymnastic.videoId} opts={playerOptions} />
            <GymnasticsTitleS>{gymnastic.title}</GymnasticsTitleS>
          </GymnasticsVideoS>
        </GymnasticsCardS>
      ))}
    </GymnasticsBoxS>
  );
}

export default Gymnastics;
