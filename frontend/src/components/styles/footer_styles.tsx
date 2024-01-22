import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface FooterIconProps {
  footerIconUrl: string;
  footerHoverIconUrl: string;
}

export const FooterBgS = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 70px;
  background-image: url('src/assets/footer_bg.png');
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: space-around; /* 가로 가운데 정렬 */
`;

export const FooterIconS = styled(Link)<FooterIconProps>`
  width: 40px;
  height: 40px;

  background-image: url('src/assets/${props => props.footerIconUrl}.png');
  background-size: cover; /* 이미지가 화면에 가득 차도록 조절 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  
  text-decoration: none;
 
  &:hover {
    background-image: url('src/assets/${props => props.footerHoverIconUrl}.png');
  }
`;