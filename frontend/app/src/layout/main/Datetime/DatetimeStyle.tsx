import styled from 'styled-components';

const DateTimeBoxS = styled.div`
  margin: 0 auto;
  max-width: 390px;
`;

const DateTimeHearderS = styled.div`
  position: relative;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #666666;
  font-weight: 900;
  font-size: 1.5em;
`;

const DateTimeInputS = styled.input`
  border: none;

  color: #666666;
  font-weight: 900;
  font-size: 1.3em;
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
  width: 25px;
  height: 25px;
  margin-right: 20px;

  background: url(${props => `/src/assets/icon_${props.$dateTimeBtnType}.png`});
  background-size: cover;
  background-repeat: no-repeat;
`;

const DateTimeDiaryListBoxS = styled.div`
  position: relative;
  top: 0;
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
  width: 90vw;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DateTimeDiaryListBoxLiBoxS = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  padding: 10px;

  background: #f1dcaa;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const DateTimeDiaryListBoxLiDateS = styled.div`
  color: #666666;
  font-weight: 500;
  font-size: 1em;
`;

const DateTimeDiaryListBoxLiContentsS = styled.div`
  margin-top: 10px;
  color: #666666;
  font-weight: 300;
  font-size: 1.5em;
`;

export {
  DateTimeBoxS,
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
