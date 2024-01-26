import styled from 'styled-components';

const BgImgS = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background: url('/src/assets/bg_img.png');
  background-size: cover;
  background-repeat: no-repeat;

  z-index: -1;
`;

export default BgImgS;
