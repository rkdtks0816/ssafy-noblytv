import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LargeBtnS = styled(Link)`
  width: 300px;
  height: 50px;

  background: #EAC164;
  border: none;
  border-radius: 25px;
  text-decoration: none;

  color: #FFFFFF;
  font-weight: 900;
  font-size: 24px;
  text-align: center;
  line-height: 2;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background: #DDB75D;
  }
`;
