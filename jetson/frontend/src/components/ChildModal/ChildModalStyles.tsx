import styled from 'styled-components';

const ChildModalBg = styled.div<{ isFullScreen?: boolean; isActive?: boolean }>`
  position: fixed;
  right: ${props => {
    if (props.isActive && props.isFullScreen) {
      return '0';
    }
    if (props.isActive) {
      return '3vw';
    }
    return '-100vw';
  }};
  transition: all 1500ms ease-out;
  bottom: ${props => (props.isFullScreen ? '0' : '5vh')};
  top: ${props => (props.isFullScreen ? '0' : 'auto')};
  width: ${props => (props.isFullScreen ? '100vw' : '22vw')};
  height: ${props => (props.isFullScreen ? '100vh' : '60vh')};
  min-height: 50%;
  height: auto;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 0px 5vw 0.1vw #444444;
  backdrop-filter: ${props =>
    props.isFullScreen ? 'blur(500px)' : 'blur(125px)'};
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
  margin: 3vh 2vw;
  font-size: 2vw;
  text-align: center;
  overflow: hidden;
`;

const ChildModalDynamicContent = styled.div`
  margin: 1vh auto;
  font-size: 2vw;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const ChildModalImg = styled.div`
  background: url('src/assets/child.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  min-height: 20vh;
  min-width: 20vw;
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

const MessageBox = styled.div<{ isVisible: boolean }>`
  margin: 5vh auto;
  font-size: 2vw;
  text-align: center;
  justify-content: center;
  white-space: normal;
  word-break: break-word;
`;

export {
  ChildModalBg,
  ChildModalContent,
  ChildModalDynamicContent,
  ChildModalImg,
  ChildModalTitle,
  ChildModalVideo,
  ChildModalVideoBG,
  MessageBox,
};
