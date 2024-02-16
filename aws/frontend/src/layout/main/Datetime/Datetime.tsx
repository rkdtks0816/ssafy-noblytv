import React, { useEffect, useState } from 'react';
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
  DateTimeScheduleBoxS,
  DateTimeScheduleListBoxUlS,
  DateTimeScheduleListBoxLiContentsS,
  DateTimeScheduleListBoxLiBoxS,
  DateTimeScheduleListBoxLiDateS,
} from './DatetimeStyle';
import { DiaryResType, SchedulesResType } from '../../../types/api_types';
import Modal from '../../../components/Modal/Modal';
import useModalContentsStore from '../../../store/useModalContents';
import MainMenuTitleStyle from '../../../components/MainMenuTitle/MainMenuTitleStyle';

function Datetime({
  schedulesData,
  diaryContentsData,
}: {
  schedulesData: SchedulesResType[];
  diaryContentsData: DiaryResType[];
}) {
  const { modalContents, setModalContents } = useModalContentsStore();
  const [nowDate, setNowDate] = useState<string>('');
  const [btnType, setBtnType] = useState<string>('calendar');
  const [schedules, setSchedules] = useState<SchedulesResType[]>([]);
  const [diaryContents, setDiaryContents] = useState<DiaryResType[]>([]);

  const getCurrentDate = (): string => new Date().toISOString().split('T')[0];

  useEffect(() => {
    setSchedules(
      schedulesData.sort((a, b) => {
        if (!a.scheduleDay && b.scheduleDay) {
          return -1;
        }
        if (a.scheduleDay && !b.scheduleDay) {
          return 1;
        }
        if (a.scheduleDay && b.scheduleDay) {
          const dayComparison =
            new Date(a.scheduleDay).getTime() -
            new Date(b.scheduleDay).getTime();
          if (dayComparison === 0) {
            return (
              new Date(b.scheduleTime).getTime() -
              new Date(a.scheduleTime).getTime()
            );
          }

          return dayComparison;
        }
        return 0;
      }),
    );

    setDiaryContents(
      diaryContentsData.sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
      ),
    );
  }, [diaryContentsData, schedulesData]);

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
      <DateTimeScheduleBoxS>
        <DateTimeScheduleListBoxUlS>
          <MainMenuTitleStyle>일정</MainMenuTitleStyle>
          {schedules
            .filter(schedule =>
              nowDate && schedule.scheduleDay
                ? schedule.scheduleDay.slice(0, 10) === nowDate
                : true,
            )
            .map(schedule => (
              <DateTimeScheduleListBoxLiBoxS key={schedule.registeredTime}>
                <DateTimeScheduleListBoxLiDateS>
                  {`${schedule.scheduleDay ? schedule.scheduleDay.slice(0, 10) : '반복'} ${schedule.scheduleDay ? schedule.scheduleDay.slice(11, 16) : schedule.scheduleTime.slice(0, 5)}`}
                </DateTimeScheduleListBoxLiDateS>
                <DateTimeScheduleListBoxLiContentsS>
                  {schedule.schedule}
                </DateTimeScheduleListBoxLiContentsS>
              </DateTimeScheduleListBoxLiBoxS>
            ))}
        </DateTimeScheduleListBoxUlS>
      </DateTimeScheduleBoxS>
      <DateTimeDiaryListBoxS>
        <DateTimeDiaryListBoxUlS>
          <MainMenuTitleStyle>일기</MainMenuTitleStyle>
          {diaryContents
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
                  {diaryContent.summary.split('- ').map((part, index) => (
                    <React.Fragment key={part}>
                      {index > 1 && <br />} {index > 0 && `- ${part}`}
                    </React.Fragment>
                  ))}
                </DateTimeDiaryListBoxLiContentsS>
              </DateTimeDiaryListBoxLiBoxS>
            ))}
        </DateTimeDiaryListBoxUlS>
      </DateTimeDiaryListBoxS>
      {modalContents && <Modal />}
    </DateTimeBoxS>
  );
}

export default Datetime;
