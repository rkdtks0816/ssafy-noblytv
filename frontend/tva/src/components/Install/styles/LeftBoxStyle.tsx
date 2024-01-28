import styled from 'styled-components';

const LeftBoxStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 100%;
  color: white;

  p {
    font-size: large;
    font-weight: 800;
  }

  div {
    margin-bottom: 30px;
  }

  ol {
    padding-left: 30px;
    margin-bottom: 30px;
  }

  li {
    margin-bottom: 5px;
  }
`;

export default LeftBoxStyle;
