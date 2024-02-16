import styled from 'styled-components';

const SignInBgS = styled.div`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: #666666;
`;

const LeftBoxS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 46vw;
  border-right: 0.7vw dashed #ccc;
  padding-left: 4vw;
`;

const RightBoxS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 49vw;
`;
const SignInBoxTitleS = styled.div`
  color: white;
  font-size: 3.5vw;
  font-weight: 900;
  margin-top: 3vh;
  margin-bottom: 3vh;
`;

const SignInBoxContentsS = styled.div`
  color: white;
  font-size: 2.5vw;
  font-weight: 900;
  margin-top: 1vh;
  margin-left: 3vw;
`;

const SignInBoxSubContentsS = styled.div`
  color: white;
  font-size: 1.5vw;
  font-weight: 900;
  margin-top: 10vh;
`;

export {
  LeftBoxS,
  RightBoxS,
  SignInBgS,
  SignInBoxContentsS,
  SignInBoxSubContentsS,
  SignInBoxTitleS,
};
