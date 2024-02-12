import styled from 'styled-components';

const MainBoxS = styled.div`
  position: fixed;
  top: 80px;
  left: 0px;
  width: 100vw;

  max-height: calc(100vh - 180px);
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

export default MainBoxS;
