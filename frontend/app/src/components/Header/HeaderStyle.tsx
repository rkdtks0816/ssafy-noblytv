import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBgS = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100vw;
  height: 70px;
  z-index: -1;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SeniorNameS = styled(Link)`
  margin: auto 5px 10px 10px;

  font-weight: 900;
  font-size: 2em;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

const SeniorTitleS = styled.div`
  margin: auto 0 10px 0;

  font-weight: 900;
  font-size: 1.3em;

  color: #888888;

  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

const NoticeIconS = styled(Link)`
  width: 30px;
  height: 30px;
  margin: 20px 20px 20px auto;

  background-image: url('/src/assets/icon_notice.png');
  background-size: cover;
  background-repeat: no-repeat;

  text-decoration: none;
`;

export { HeaderBgS, SeniorNameS, SeniorTitleS, NoticeIconS };
