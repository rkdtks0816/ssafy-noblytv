import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderBgS= styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  width: 100vw;
  height: 70px;

  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SeniorNameS = styled(Link)`
  height: 40px;
  margin: 15px 10px 15px 15px;

  font-weight: 400;
  font-size: 40px;
  line-height: 2;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

export const SeniorTitleS = styled.div`
  height: 25px;
  margin: 30px 0 15px 0;

  font-weight: 400;
  font-size: 25px;
  line-height: 2;

  color: #888888;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;


export const NoticeIconS = styled(Link)`
  width: 30px;
  height: 30px;
  margin: 20px 20px 20px auto;

  background-image: url('src/assets/notice_icon.png');
  background-size: cover; /* 이미지가 화면에 가득 차도록 조절 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  
  text-decoration: none;

  &:hover {
    background-image: url('src/assets/notice_icon_hover.png');
  }
`;