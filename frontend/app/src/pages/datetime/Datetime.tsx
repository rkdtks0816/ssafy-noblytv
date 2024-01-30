import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { DateTimeInputS, DateTimeDiaryS } from './DatetimeStyle';

function Datetime() {
  // 현재 날짜를 얻어오는 함수
  const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

  // 초기값 상태를 현재 날짜로 설정
  const [initialDate, setInitialDate] = useState<string>(getCurrentDate());
  const [diaryContents, setdiaryContents] = useState<string>(
    '오늘은 날씨가 좋아서 산책을 다녀왔다.',
  );

  return (
    <div>
      <Header />
      <DateTimeInputS
        type="date"
        id="myDateInput"
        value={initialDate}
        onChange={e => setInitialDate(e.target.value)}
      />
      {diaryContents && <DateTimeDiaryS>{diaryContents}</DateTimeDiaryS>}
      <Footer />
    </div>
  );
}

export default Datetime;
