import styled from 'styled-components';

const HeaderBgS = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100vw;
  height: 55px;
  z-index: -1;

  background: #ffffff;
`;

const SeniorNameS = styled.div`
  margin: auto 5px 10px 10px;

  font-weight: 900;
  font-size: 1.2em;

  color: #000000;
  text-decoration: none;

  cursor: pointer;
`;

const SeniorTitleS = styled.div`
  margin: auto 0 10px 0;

  font-weight: 900;
  font-size: 0.9em;

  color: #888888;
`;

const NoticeIconS = styled.div`
  width: 19px;
  height: 19px;
  margin: auto 20px 17px auto;

  background-image: url('/icon/icon_notice.png');
  background-size: cover;
  background-repeat: no-repeat;

  text-decoration: none;

  cursor: pointer;
`;

export { HeaderBgS, SeniorNameS, SeniorTitleS, NoticeIconS };
