import styled from 'styled-components';

const ChildModalBg = styled.div`
  position: fixed;
  right: -100vw;
  transition: right 1s ease-out;
  bottom: 5vh;
  width: 22vw;
  height: 60vh;
  min-height: 20vh; /* 최소 높이 설정 */
  display: flex;
  align-items: center;
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
  margin: 2vh 3vw;
  font-size: 3vw;
  text-align: center;
`;

const ChildModalContent = styled.div`
  margin: 1vh auto;
  font-size: 2vw;
`;

const ChildModalImg = styled.div`
  background: url('src/assets/child.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; /* 중앙 정렬 */
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  width: 100%;
  height: 100%;
  border-radius: 5vw; /* 이미지도 부모와 같은 경계 반경을 가짐 */
`;

const ChildModalVideo = styled.video`
  width: 100%;
  height: 100%;
`;

export {
  ChildModalBg,
  ChildModalTitle,
  ChildModalContent,
  ChildModalImg,
  ChildModalVideo,
};
