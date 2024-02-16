import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  GymnasticsBoxS,
  GymnasticsCardS,
  GymnasticsDayS,
  GymnasticsHeaderS,
  GymnasticsTitleS,
  GymnasticsVideoS,
  GymnasticsYoutubeS,
} from './GymnasticsStyle';
import { GymnasticsResType } from '../../../types/api_types';
import GymnasticsKeyword from './GymnasticsKeyword';
import DropDown from '../../../components/DropDown/DropDown';
import {
  API_GYMNASTICS,
  API_PORT,
  BASE_URL,
} from '../../../constants/constants';
import useReloadStore from '../../../store/useReloadStore';
import MainMenuTitleStyle from '../../../components/MainMenuTitle/MainMenuTitleStyle';

function Gymnastics({
  gymnasticsData,
}: {
  gymnasticsData: GymnasticsResType[];
}) {
  const setReload = useReloadStore(state => state.setReload);
  const [gymnastics, setGymnastics] = useState<GymnasticsResType[]>([]);
  const playerOptions = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
    },
  };

  useEffect(() => {
    const dayOrder = ['월', '화', '수', '목', '금', '토', '일'];

    // 배열을 day 속성을 기준으로 정렬
    const sortedArray = gymnasticsData.sort(
      (a, b) => dayOrder.indexOf(a.day) - dayOrder.indexOf(b.day),
    );
    setGymnastics(sortedArray);
  }, [gymnasticsData]);

  const onClickKeyword = ({
    value,
    gymnastic,
  }: {
    value: string;
    gymnastic: GymnasticsResType;
  }) => {
    axios
      .put(
        `${BASE_URL}:${API_PORT}${API_GYMNASTICS}/${gymnastic.id}?newKeyword=${value}&newDay=${gymnastic.day}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(() => {
        setReload(true);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <GymnasticsBoxS>
      <MainMenuTitleStyle>체조관리</MainMenuTitleStyle>
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
            <GymnasticsYoutubeS
              videoId={gymnastic.videoId}
              opts={playerOptions}
            />
            <GymnasticsTitleS>{gymnastic.title}</GymnasticsTitleS>
          </GymnasticsVideoS>
        </GymnasticsCardS>
      ))}
    </GymnasticsBoxS>
  );
}

export default Gymnastics;
