import styled from 'styled-components';

const DropDownSelectS = styled.div`
  position: absolute;
  right: 0px;
  top: -10px;

  background: #ffffff;
  border-radius: 10px;
  padding: 0 10px;

  max-height: 200px;
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

const DropDownOptionS = styled.div`
  font-weight: 900;
  font-size: 1.5em;
  text-align: end;

  border: none;
  color: #5ab8c0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  cursor: pointer;
`;

export { DropDownSelectS, DropDownOptionS };
