import styled from 'styled-components';

const PopupBoxS = styled.div<{ $isPopup: string }>`
  position: fixed;
  top: ${props => (props.$isPopup ? '5px' : '-100px')};
  left: 0;
  width: 100vw;
  background: #eeeeee;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  transition: top 1s ease-in-out;
`;

const PopupTitleS = styled.div`
  padding: 15px;
  padding-bottom: 0px;
  color: #666666;
  font-weight: 500;
  font-size: 1em;
  margin-bottom: 5px;
`;

const PopupContentsS = styled.div`
  padding: 15px;
  padding-top: 0px;
  color: #666666;
  font-weight: 600;
  font-size: 1.1em;
`;

export { PopupBoxS, PopupTitleS, PopupContentsS };
