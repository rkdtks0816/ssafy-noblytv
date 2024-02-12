import { useEffect, useState } from 'react';
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
import { DiaryResType } from '../../../types/api_types';
import Modal from '../../../components/Modal/Modal';
import useModalContentsStore from '../../../store/useModalContents';

function Datetime({
  diaryContentsData,
}: {
  diaryContentsData: DiaryResType[];
}) {
  const { modalContents, setModalContents } = useModalContentsStore();
  const [nowDate, setNowDate] = useState<string>('');
  const [btnType, setBtnType] = useState<string>('calendar');
  const [diaryContents, setDiaryContents] = useState<DiaryResType[]>([]);

  const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

  useEffect(() => {
    setDiaryContents(diaryContentsData);
    console.log(diaryContentsData);
  }, [diaryContentsData]);

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
      {modalContents && <Modal />}
    </DateTimeBoxS>
  );
}

export default Datetime;
