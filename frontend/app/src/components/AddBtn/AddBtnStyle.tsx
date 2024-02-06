// AddBtnStyle.tsx
import styled from 'styled-components';

const AddBtnStyle = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 50px;
  margin: 0;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  line-height: 50px; // 세로 중앙 정렬을 위해 height와 동일하게 설정
  position: absolute;
  bottom: 10%;
  right: 4%;

  &:hover {
    background-color: #45a049;
  }
`;

export default AddBtnStyle;
