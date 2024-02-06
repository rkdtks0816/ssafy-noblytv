import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import {
  DateTimeInputS,
  DateTimeTitleS,
  DateTimeBtnS,
  DateTimeHearderS,
  DateTimeDiaryListBoxS,
  DateTimeDiaryListBoxUlS,
  DateTimeDiaryListBoxLiBoxS,
  DateTimeDiaryListBoxLiDateS,
  DateTimeDiaryListBoxLiContentsS,
} from './DatetimeStyle';
import { DiaryResType } from '../../types/api_types';
import Modal from '../../components/Modal/Modal';
import {
  API_PORT,
  BASE_URL,
  API_DIARY_VIEW,
  PATH_SIGN_IN,
  PATH_COMMUNITY,
} from '../../constants/constants';
import manageAuthToken from '../../utils/manageAuthToken';

function Datetime() {
  const grantType = Cookies.get('grantType');
  const accessToken = Cookies.get('accessToken');
  const navigate = useNavigate();
  // 현재 날짜를 얻어오는 함수
  const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

  // 초기값 상태를 현재 날짜로 설정
  const [nowDate, setNowDate] = useState<string>('');
  const [btnType, setBtnType] = useState<string>('calendar');
  const [diaryContents, setdiaryContents] = useState<DiaryResType[]>([]);
  const [modalContents, setModalContents] = useState<React.ReactNode>('');

  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN, { state: PATH_COMMUNITY }),
    });
  }, [navigate]);

  useEffect(() => {
    // axios
    //   .get<DiaryResType[]>(`${BASE_URL}:${API_PORT}${API_DIARY_VIEW}`, {
    //     headers: { Authorization: `${grantType} ${accessToken}` },
    //   })
    //   .then(response => {
    //     setdiaryContents(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    setdiaryContents([
      {
        id: 1,
        date: '2024-01-27',
        text: '오늘은 날씨가 좋아서 산책을 다녀왔다.',
        summary: '산책',
      },
      {
        id: 2,
        date: '2024-01-28',
        text: '오늘은 무덥고 햇볕이 강했다.',
        summary: '햇볕',
      },
      {
        id: 3,
        date: '2024-01-29',
        text: '하루종일 비가 내렸다. 집에서 영화를 봤다.',
        summary: '비, 영화',
      },
      {
        id: 4,
        date: '2024-01-30',
        text: '가족과 함께 저녁 식사를 즐겼다.',
        summary: '가족, 저녁 식사',
      },
      {
        id: 5,
        date: '2024-01-31',
        text: '좋은 책을 읽으면서 여유로운 시간을 보냈다.',
        summary: '좋은 책, 여유로운 시간',
      },
      {
        id: 6,
        date: '2024-02-01',
        text: '운동 후 건강한 식사를 챙겼다.',
        summary: '운동, 건강한 식사',
      },
      {
        id: 7,
        date: '2024-02-02',
        text: '오랜만에 친구와 연락을 주고받았다.',
        summary: '친구, 연락',
      },
      {
        id: 8,
        date: '2024-02-03',
        text: '새로운 취미를 시작해보았다.',
        summary: '새로운 취미',
      },
      {
        id: 9,
        date: '2024-02-04',
        text: '가까운 공원에서 피크닉을 즐겼다.',
        summary: '가까운 공원, 피크닉',
      },
      {
        id: 10,
        date: '2024-02-05',
        text: '길게 늘어진 주말을 즐기며 휴식했다.',
        summary: '길게 늘어진 주말, 휴식',
      },
    ]);
  }, []);

  const handleDatetimeHeader = () => {
    if (btnType === 'calendar') {
      setNowDate(getCurrentDate);
      setBtnType('menu');
    } else {
      setNowDate('');
      setBtnType('calendar');
    }
  };

  const detailDiary: (diaryContent: DiaryResType) => void = diaryContent => {
    setModalContents(diaryContent.text);
  };

  const handleDateDiary = () =>
    diaryContents
      .filter(diaryContent => (nowDate ? diaryContent.date === nowDate : true))
      .map(diaryContent => (
        <DateTimeDiaryListBoxLiBoxS
          key={diaryContent.summary}
          onClick={() => detailDiary(diaryContent)}
        >
          <DateTimeDiaryListBoxLiDateS>
            {diaryContent.date}
          </DateTimeDiaryListBoxLiDateS>
          <DateTimeDiaryListBoxLiContentsS>
            {diaryContent.summary}
          </DateTimeDiaryListBoxLiContentsS>
        </DateTimeDiaryListBoxLiBoxS>
      ));

  return (
    <div>
      <Header />
      <DateTimeHearderS>
        {nowDate ? (
          <DateTimeInputS
            type="date"
            id="myDateInput"
            value={nowDate}
            onChange={e => setNowDate(e.target.value)}
          />
        ) : (
          <DateTimeTitleS>전체</DateTimeTitleS>
        )}
        <DateTimeBtnS
          onClick={handleDatetimeHeader}
          $dateTimeBtnType={btnType}
        />
      </DateTimeHearderS>
      <DateTimeDiaryListBoxS>
        <DateTimeDiaryListBoxUlS>{handleDateDiary()}</DateTimeDiaryListBoxUlS>
      </DateTimeDiaryListBoxS>
      {modalContents && (
        <Modal modalContents={modalContents} onClickBtn={setModalContents} />
      )}
      <Footer />
    </div>
  );
}

export default Datetime;
