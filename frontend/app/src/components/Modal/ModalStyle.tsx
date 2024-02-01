/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const ModalBgS = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #8888886f;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: center; /* 가로 가운데 정렬 */
`;

const ModalBoxS = styled.div`
  width: 330px;

  background: #ffffff;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const ModalTitleS = styled.div`
  color: #ff1f1f;
  font-weight: 900;
  font-size: 30px;
  padding-left: 20px;
  line-height: 2;
`;

const ModalContentsS = styled.div`
  color: #666666;
  font-weight: 600;
  font-size: 25px;
  padding-left: 20px;
  line-height: 1.5;
  white-space: pre-line;
`;

const ModalButtonS = styled.div`
  width: 60px;
  height: 40px;
  margin: 0px 10px 10px auto;
  background: #eac164;
  border-radius: 10px;

  text-align: center;
  color: #666666;
  font-weight: 900;
  font-size: 20px;
  line-height: 2;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export { ModalBgS, ModalBoxS, ModalTitleS, ModalContentsS, ModalButtonS };
