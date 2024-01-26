import styled from 'styled-components';

const ChildModalBg = styled.div`
  position: fixed;
  right: -100vw;
  transition: right 1s ease-out;
  bottom: 5vh;
  width: 30vw;
  height: 60vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5vw 0.1vw #444444;
  backdrop-filter: blur(125px);

  border-radius: 5vw;

  font-family: 'BM HANNA_TTF';
  font-style: normal;
  font-weight: 900;
  color: #222222;
`;

const ChildModalTitle = styled.div`
  margin: 4vh 0 0 3vw;
  font-size: 4vw;
`;

const ChildModalContent = styled.div`
  margin: 1vh 0 0 3vw;
  font-size: 3vw;
`;

const ChildModalImg = styled.div`
  margin: 0 auto;
  background: url('src/assets/child.png');
  background-size: contain;
  background-repeat: no-repeat;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  width: 100%;
  height: 100%;
  border-radius: 5vw; /* 이미지도 부모와 같은 경계 반경을 가짐 */
`;

export { ChildModalBg, ChildModalTitle, ChildModalContent, ChildModalImg };
