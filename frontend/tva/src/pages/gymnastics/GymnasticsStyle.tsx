// tva/src/pages/gymnastics/GymnasticsStyle.tsx
import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const GymnasticsContainer = styled.div`
  animation: ${slideInFromLeft} 1.8s forwards;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: black;
  overflow: hidden;
`;

export default GymnasticsContainer;
