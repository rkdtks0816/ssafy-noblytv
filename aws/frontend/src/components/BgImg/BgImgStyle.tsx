import styled from 'styled-components';

const BgImgStyle = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  background: url('/background_img/bg_img.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export default BgImgStyle;
