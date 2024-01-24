import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackBtnStyle = styled(Link)`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 40px;
  background-image: url('/src/assets/icon_back_btn.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export default BackBtnStyle;
