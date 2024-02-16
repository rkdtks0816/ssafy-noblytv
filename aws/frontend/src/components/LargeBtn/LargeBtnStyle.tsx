import styled from 'styled-components';

const LargeBtnStyle = styled.div`
  width: 70vw;
  max-width: 300px;
  height: 30px;
  padding: 10px;

  cursor: pointer;

  background: #eac164;
  border-radius: 25px;
  text-decoration: none;

  color: #ffffff;
  font-weight: 900;
  font-size: 1.5em;
  text-align: center;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    background: #ddb75d;
  }
`;

export default LargeBtnStyle;
