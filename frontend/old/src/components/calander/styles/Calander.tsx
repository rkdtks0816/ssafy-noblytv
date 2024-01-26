import styled from 'styled-components';

export const CalendarContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  width: 200px;
  height: 48px;
  border: 0.8px solid var(--festie-gray-600, #949494);
  border-radius: 10px;
  padding: 0px 12px;
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  text-align: start;
  appearance: none;
  background-color: white;
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 12px;
`;

interface CalendarWrapperProps {
  isOpen: boolean;
}

export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  z-index: 11;
  position: absolute;
  top: 100%;
  left: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;
