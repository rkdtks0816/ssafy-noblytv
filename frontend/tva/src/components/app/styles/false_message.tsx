import styled from 'styled-components';

export const FalseMsgImgS = styled.div`
  width: 15px;
  height: 15px;

  background: url('/src/assets/false.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FalseMsgContentsS = styled.div`
  margin-left: 5px;
  color: #ff1f1f;
  font-weight: 900;
  font-size: 15px;
  line-height: 2;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;
