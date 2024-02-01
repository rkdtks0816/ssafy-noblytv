import { useState, useEffect } from 'react';
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
import axios from 'axios';
import { API_PORT, BASE_URL, API_DIARY_VIEW } from '../../constants/api';

function Datetime() {
  // 현재 날짜를 얻어오는 함수
  const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

  // 초기값 상태를 현재 날짜로 설정
  const [nowDate, setNowDate] = useState<string>('');
  const [btnType, setBtnType] = useState<string>('calendar');
  const [diaryContents, setdiaryContents] = useState<DiaryResType[]>([]);
  const [modalContents, setModalContents] = useState<React.ReactNode>('');

  useEffect(() => {
    axios.get<DiaryResType[]>(`${BASE_URL}:${API_PORT}${API_DIARY_VIEW}`);
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
