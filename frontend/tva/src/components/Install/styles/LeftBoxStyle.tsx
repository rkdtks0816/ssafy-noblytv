import styled from 'styled-components';

const LeftBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 100%;
  color: white;

  p {
    font-size: 30px;
    font-weight: 800;
  }

  div {
    margin-bottom: 30px;
    font-size: 20px;
  }

  ol {
    padding-left: 30px;
    margin-bottom: 30px;
    font-size: 20px;
  }

  li {
    margin-bottom: 5px;
    font-size: 20px;
  }
`;

export default LeftBoxStyle;
