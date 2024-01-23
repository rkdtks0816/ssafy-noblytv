import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LargeBtnS = styled(Link)`
  width: 300px;
  height: 50px;
  
  cursor: pointer;

  background: #eac164;
  border: none;
  border-radius: 25px;
  text-decoration: none;

  color: #ffffff;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  line-height: 2;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background: #ddb75d;
  }
`;

export default LargeBtnS;
