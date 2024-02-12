import styled from 'styled-components';

const HeaderBgS = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100vw;
  height: 70px;
  z-index: -1;

  background: #ffffff;
`;

const SeniorNameS = styled.div`
  margin: auto 5px 10px 10px;

  font-weight: 900;
  font-size: 2em;

  color: #666666;
  text-decoration: none;
`;

const SeniorTitleS = styled.div`
  margin: auto 0 10px 0;

  font-weight: 900;
  font-size: 1.3em;

  color: #888888;
`;

const NoticeIconS = styled.div`
  width: 25px;
  height: 25px;
  margin: 20px 20px 20px auto;

  background-image: url('/src/assets/icon_notice.png');
  background-size: cover;
  background-repeat: no-repeat;

  text-decoration: none;
`;

export { HeaderBgS, SeniorNameS, SeniorTitleS, NoticeIconS };
