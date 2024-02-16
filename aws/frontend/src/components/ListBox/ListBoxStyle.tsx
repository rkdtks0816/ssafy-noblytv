import styled from 'styled-components';

const ListBoxS = styled.div`
  margin-top: 10px;
  max-height: 45vh;
  width: 100vw;
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
  width: 70%;
  max-width: 300px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ListBoxLiS = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px;
  margin-bottom: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #ffffff;
  border: none;
  border-radius: 10px;

  color: #888888;
  font-weight: 600;
  font-size: 1em;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const CheckIconS = styled.div`
  width: 15px;
  height: 15px;

  background: url('/icon/icon_success.png');
  background-repeat: no-repeat;
  background-size: cover;
`;

export { ListBoxS, ListBoxUlS, ListBoxLiS, CheckIconS };
