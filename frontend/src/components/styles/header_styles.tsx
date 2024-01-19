import styled from 'styled-components';

export const HeaderBg = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100vw;
  height: 70px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SeniorName = styled.div`
  height: 40px;
  margin: 15px 10px 15px 15px;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 40px;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SeniorTitle = styled.div`
  height: 25px;
  margin: 30px 0 15px 0;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 25px;
  /* identical to box height */

  color: #888888;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const NoticeIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 15px;
  margin-left: auto;
  z-index: 1;

  background: url(/assets/notification.png);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;