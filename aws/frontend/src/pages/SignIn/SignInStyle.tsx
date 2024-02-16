import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LogoImgS = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;

  background: url('/logo/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

const FindIdPwBtnS = styled(Link)`
  margin: 10px auto 0 auto;
  width: 300px;

  text-align: right;
  color: #888888;
  font-size: 15px;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

const SignUpBtnS = styled(Link)`
  margin: 0 auto 10vh auto;
  width: 300px;

  text-align: center;
  color: #666666;
  font-size: 21px;
  font-weight: 900;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

export { FindIdPwBtnS, LogoImgS, SignUpBtnS };
