import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FooterIconProps } from './FooterType';

export const FooterBgS = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 70px;
  background-image: url('./assets/footer_bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: space-around; /* 가로 가운데 정렬 */
`;

export const FooterIconS = styled(Link)<FooterIconProps>`
  width: 40px;
  height: 40px;

  background-image: url('/src/assets/icon_${props => props.footerIconType}.png');
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));

  text-decoration: none;

  &:hover {
    background-image: url('/src/assets/hover_icon_${props => props.footerIconType}.png');
  }
`;
