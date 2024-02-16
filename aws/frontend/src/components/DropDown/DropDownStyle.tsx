import styled from 'styled-components';

const DropDownBoxS = styled.div`
  position: relative;
  display: block;
  width: 50%;
  max-width: 200px;
  z-index: 1000;
`;

const DropDownSelectedS = styled.div`
  font-weight: 900;
  font-size: 1.3em;
  text-align: end;

  border: none;
  color: #5ab8c0;

  cursor: pointer;
`;

const DropDownSelectS = styled.div`
  position: absolute;
  right: -10px;
  top: 30px;

  background: #ffffff;
  border-radius: 10px;
  padding: 0 10px;

  width: 100%;
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

  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const DropDownOptionS = styled.div`
  font-weight: 900;
  font-size: 1.3em;
  text-align: end;

  border: none;
  color: #5ab8c0;

  cursor: pointer;
`;

export { DropDownBoxS, DropDownSelectedS, DropDownSelectS, DropDownOptionS };
