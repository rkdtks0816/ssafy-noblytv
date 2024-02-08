import { useState } from 'react';
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
  DateTimeBoxS,
} from './DatetimeStyle';
import { DiaryResType } from '../../types/api_types';
import Modal from '../../components/Modal/Modal';

function Datetime({ diaryContents }: { diaryContents: DiaryResType[] }) {
  // 현재 날짜를 얻어오는 함수
  const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

  // 초기값 상태를 현재 날짜로 설정
  const [nowDate, setNowDate] = useState<string>('');
  const [btnType, setBtnType] = useState<string>('calendar');
  const [modalContents, setModalContents] = useState<React.ReactNode>('');

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
      .filter(diaryContent =>
        nowDate ? diaryContent.date.slice(0, 10) === nowDate : true,
      )
      .map(diaryContent => (
        <DateTimeDiaryListBoxLiBoxS
          key={diaryContent.summary}
          onClick={() => detailDiary(diaryContent)}
        >
          <DateTimeDiaryListBoxLiDateS>
            {diaryContent.date.slice(0, 10)}
          </DateTimeDiaryListBoxLiDateS>
          <DateTimeDiaryListBoxLiContentsS>
            {diaryContent.summary}
          </DateTimeDiaryListBoxLiContentsS>
        </DateTimeDiaryListBoxLiBoxS>
      ));

  return (
    <DateTimeBoxS>
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
    </DateTimeBoxS>
  );
}

export default Datetime;
