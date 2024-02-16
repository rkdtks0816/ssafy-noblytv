import styled from 'styled-components';

const StatusMsgBoxS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-top: 5px;
`;

const StatusMsgImgS = styled.div<{ $iconType?: string }>`
  width: 15px;
  height: 15px;

  background: url(${props => `/icon/icon_${props.$iconType}.png`});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StatusMsgContentsS = styled.div<{ $contentsColor?: string }>`
  margin-left: 5px;
  color: ${props => props.$contentsColor};
  font-weight: 900;
  font-size: 15px;
  line-height: 1.5;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export { StatusMsgBoxS, StatusMsgImgS, StatusMsgContentsS };
