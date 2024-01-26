import styled from 'styled-components';

const ListBoxS = styled.div`
  margin-top: 10px;
  max-height: 45vh;
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

const ListBoxUlS = styled.div`
  width: 290px;
  padding: 0 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ListBoxLiS = styled.div`
  width: 270px;
  height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border: none;
  border-radius: 10px;

  color: #888888;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.5;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const CheckIconS = styled.div`
  width: 30px;
  height: 30px;

  background: url('/src/assets/icon_success.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

export { ListBoxS, ListBoxUlS, ListBoxLiS, CheckIconS };
