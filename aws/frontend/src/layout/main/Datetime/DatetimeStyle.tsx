import styled from 'styled-components';

const DateTimeBoxS = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DateTimeHearderS = styled.div`
  position: relative;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #666666;
  font-weight: 900;
  font-size: 1.2em;
`;

const DateTimeInputS = styled.input`
  border: none;

  color: #666666;
  font-weight: 900;
  font-size: 1.2em;
  text-align: center;

  background-color: #ffffff;

  &:focus {
    outline: none;
  }
`;

const DateTimeTitleS = styled.div`
  padding-left: 10px;
`;

const DateTimeBtnS = styled.div<{ $dateTimeBtnType: string }>`
  width: 20px;
  height: 20px;
  margin-right: 20px;

  background: url(${props => `/icon/icon_${props.$dateTimeBtnType}.png`});
  background-size: cover;
  background-repeat: no-repeat;
`;

const DateTimeScheduleBoxS = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  max-width: 400px;
  height: 30%;
  background: #ffffff;
  border-top: 2px solid #5ab8c0;
  border-bottom: 2px solid #5ab8c0;
  overflow: hidden;
  overflow-y: auto;

  /* Chrome, Safari, Edge 스크롤 바 숨기기 */
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  /* Firefox 스크롤 바 숨기기 */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
`;

const DateTimeScheduleListBoxUlS = styled.div`
  width: 90%;
  max-width: 400px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

const DateTimeScheduleListBoxLiBoxS = styled.div`
  margin: 10px;
`;

const DateTimeScheduleListBoxLiDateS = styled.div`
  color: #666666;
  font-weight: 500;
  font-size: 1em;
`;

const DateTimeScheduleListBoxLiContentsS = styled.div`
  margin-top: 3px;
  color: #666666;
  font-weight: 300;
  font-size: 1.2em;
`;

const DateTimeDiaryListBoxS = styled.div`
  position: absolute;
  top: calc(30% + 45px);
  width: 100%;
  height: 60%;
  overflow: hidden;
  overflow-y: auto;

  /* Chrome, Safari, Edge 스크롤 바 숨기기 */
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  /* Firefox 스크롤 바 숨기기 */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
`;

const DateTimeDiaryListBoxUlS = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DateTimeDiaryListBoxLiBoxS = styled.div`
  width: 90%;
  max-width: 370px;
  margin: 10px 0;
  padding: 10px;

  background: #ffffff;
  border-top: 2px solid #eac164;
  border-bottom: 2px solid #eac164;
`;

const DateTimeDiaryListBoxLiDateS = styled.div`
  color: #666666;
  font-weight: 500;
  font-size: 0.7em;
`;

const DateTimeDiaryListBoxLiContentsS = styled.div`
  margin-top: 10px;
  color: #666666;
  font-weight: 300;
  font-size: 1.2em;
`;

export {
  DateTimeBoxS,
  DateTimeHearderS,
  DateTimeTitleS,
  DateTimeInputS,
  DateTimeBtnS,
  DateTimeScheduleBoxS,
  DateTimeScheduleListBoxUlS,
  DateTimeScheduleListBoxLiBoxS,
  DateTimeScheduleListBoxLiDateS,
  DateTimeScheduleListBoxLiContentsS,
  DateTimeDiaryListBoxS,
  DateTimeDiaryListBoxUlS,
  DateTimeDiaryListBoxLiBoxS,
  DateTimeDiaryListBoxLiDateS,
  DateTimeDiaryListBoxLiContentsS,
};
