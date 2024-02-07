import styled from 'styled-components';

export const FooterBgS = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 70px;
  background: url('/src/assets/bg_footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: space-around; /* 가로 가운데 정렬 */
`;

export const FooterIconS = styled.div<{ $footerIconType: string }>`
  width: 40px;
  height: 40px;

  background: url(${props => `/src/assets/icon${props.$footerIconType}.png`});
  background-size: cover;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));

  text-decoration: none;
`;
