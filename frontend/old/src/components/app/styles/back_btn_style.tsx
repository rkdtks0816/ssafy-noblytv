import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackBtnS = styled(Link)`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-image: url('/src/assets/back_btn.png');
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: space-around; /* 가로 가운데 정렬 */
`;

export default BackBtnS;
