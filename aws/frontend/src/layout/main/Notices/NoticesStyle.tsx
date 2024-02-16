import styled from 'styled-components';

const NoticesListBoxS = styled.div`
  width: 90vw;
  max-width: 400px;
  max-height: 50vh;
  margin: 20px auto 0 auto;
  position: relative;
  top: 0px;
  left: 0px;

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

const NoticesListUlS = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const NoticesListLiS = styled.div`
  padding: 15px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: #ffffff;
  margin: 10px 0;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const NoticesListLiDateS = styled.div`
  color: #666666;
  font-weight: 500;
  font-size: 0.8em;
`;

const NoticesListLiContentsS = styled.div`
  margin-top: 5px;
  color: #666666;
  font-weight: 300;
  font-size: 1.1em;
`;

const NoticeDeleteBtn = styled.div`
  width: 16px;
  height: 16px;
  margin-bottom: auto;
  background: url('/icon/icon_error.png');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export {
  NoticesListBoxS,
  NoticesListUlS,
  NoticesListLiS,
  NoticesListLiDateS,
  NoticesListLiContentsS,
  NoticeDeleteBtn,
};
