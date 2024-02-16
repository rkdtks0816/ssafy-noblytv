import styled from 'styled-components';

const ToggleBtnBoxS = styled.div`
  width: 75vw;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 70px auto 0 auto;
`;

const ToggleBtnS = styled.div<{ $toggleBtnType: string; $isSelected: boolean }>`
  width: 50%;
  max-width: 150px;
  height: 30px;
  padding: 10px;

  cursor: pointer;

  border-radius: ${props =>
    props.$toggleBtnType === 'left' ? '10px 0 0 10px' : '0 10px 10px 0'};
  background-color: ${props => (props.$isSelected ? '#eac164' : '#FFFFFF')};

  color: #888888;
  text-align: center;
  font-weight: 900;
  font-size: 1.5em;

  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export { ToggleBtnBoxS, ToggleBtnS };
