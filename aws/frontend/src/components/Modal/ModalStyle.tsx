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
  width: 80vw;
  max-width: 330px;

  background: #ffffff;
  border-radius: 10px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const ModalContentsS = styled.div`
  color: #666666;
  font-weight: 600;
  font-size: 1.1em;
  padding: 20px;
  white-space: pre-line;
`;

const ModalButtonS = styled.div`
  width: 40px;
  height: 25px;
  margin: 0px 10px 10px auto;
  background: #eac164;
  border-radius: 10px;

  text-align: center;
  color: #666666;
  font-weight: 900;
  font-size: 0.8em;
  line-height: 1.9;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
`;

export { ModalBgS, ModalBoxS, ModalContentsS, ModalButtonS };
