import styled from 'styled-components';

const DateTimeHearderS = styled.div`
  position: fixed;
  top: 90px;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #666666;
  font-weight: 900;
  font-size: 32px;
  line-height: 2;
`;

const DateTimeInputS = styled.input`
  width: calc(100% - 70px);
  border: none;

  color: #666666;
  font-weight: 900;
  font-size: 30px;
  text-align: center;
  line-height: 2;

  &:focus {
    outline: none;
  }
`;

const DateTimeTitleS = styled.div`
  padding-left: 10px;
`;

const DateTimeBtnS = styled.div<{ $dateTimeBtnType: string }>`
  width: 25px;
  height: 25px;
  margin-right: 20px;

  background: url(${props => `/src/assets/icon_${props.$dateTimeBtnType}.png`});
  background-size: cover;
  background-repeat: no-repeat;
`;

const DateTimeDiaryListBoxS = styled.div`
  position: fixed;
  top: 140px;
  left: 0;
  width: 100%;
  height: 100%;
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
  width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DateTimeDiaryListBoxLiBoxS = styled.div`
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;

  background: #f1dcaa;
`;

const DateTimeDiaryListBoxLiDateS = styled.div`
  color: #666666;
  font-weight: 500;
  font-size: 2vh;
  line-height: 1.5;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const DateTimeDiaryListBoxLiContentsS = styled.div`
  color: #666666;
  font-weight: 300;
  font-size: 3.5vh;
  line-height: 1.5;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export {
  DateTimeHearderS,
  DateTimeTitleS,
  DateTimeInputS,
  DateTimeBtnS,
  DateTimeDiaryListBoxS,
  DateTimeDiaryListBoxUlS,
  DateTimeDiaryListBoxLiBoxS,
  DateTimeDiaryListBoxLiDateS,
  DateTimeDiaryListBoxLiContentsS,
};
