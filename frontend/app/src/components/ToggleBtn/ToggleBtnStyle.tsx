import styled from 'styled-components';
import { ToggleBtnProps } from './ToggleBtnType';

const ToggleBtnBoxS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-top: 70px;
`;

const ToggleBtnS = styled.div<ToggleBtnProps>`
  width: 150px;
  height: 50px;

  cursor: pointer;

  border-radius: ${props =>
    props.toggleBtnType === 'left' ? '10px 0 0 10px' : '0 10px 10px 0'};
  background-color: ${props => (props.isSelected ? '#eac164' : '#FFFFFF')};

  color: #888888;
  text-align: center;
  font-weight: 900;
  font-size: 25px;
  line-height: 2;

  border: none;

  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export { ToggleBtnBoxS, ToggleBtnS };
