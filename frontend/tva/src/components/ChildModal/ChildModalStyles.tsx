import styled from 'styled-components';

const ChildModalBg = styled.div<{ isFullScreen?: boolean }>`
  position: fixed;
  right: ${props => (props.isFullScreen ? '0' : '-100vw')};
  /* transition: right 2s ease-out; */
  transition: all 1500ms ease-out;
  bottom: ${props => (props.isFullScreen ? '0' : '5vh')};
  width: ${props => (props.isFullScreen ? '100vw' : '22vw')};
  height: ${props => (props.isFullScreen ? '100vh' : '60vh')};
  min-height: 20vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5vw 0.1vw #444444;
  backdrop-filter: blur(125px);

  border-radius: ${props => (props.isFullScreen ? '0' : '5vw')};

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

const ChildModalDynamicContent = styled.div`
  margin: 1vh auto;
  font-size: 2vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChildModalImg = styled.div`
  background: url('src/assets/child.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center; /* 중앙 정렬 */
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  width: 100%;
  height: 100%;
  border-radius: 5vw;
`;
const ChildModalVideoBG = styled.div`
  position: fixed;
  left: 2vw;
  top: 5vh;
  width: 12vw;
  height: 30vh;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  flex-direction: column;
  transform: scaleX(-1);
`;

const ChildModalVideo = styled.video`
  width: 100%;
  height: 100%;
  background: url('src/assets/child.png');
  z-index: 100;
`;

const SlideInMessage = styled.div<{ isVisible: boolean }>`
  position: fixed;
  left: ${props => (props.isVisible ? '0' : '-100%')};
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.5s ease-out;
  width: 22vw;
  height: auto;
  padding: 2vh 2vw;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5vw;
  color: #222222;
  z-index: 100;
`;

export {
  ChildModalBg,
  ChildModalTitle,
  ChildModalContent,
  ChildModalDynamicContent,
  ChildModalImg,
  ChildModalVideoBG,
  ChildModalVideo,
  SlideInMessage,
};
