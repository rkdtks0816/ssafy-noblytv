import styled from 'styled-components';

const ChildCenterBoxS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: #888888;
`;

const ChildCenterContentsS = styled.div`
  color: white;
  font-size: 7vw;
`;

const ChildCenterImgS = styled.div`
  height: 60vh;
  width: 60vw;

  background: url('/src/assets/child.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export { ChildCenterBoxS, ChildCenterContentsS, ChildCenterImgS };
