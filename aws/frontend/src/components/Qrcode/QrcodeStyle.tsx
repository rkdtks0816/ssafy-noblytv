import styled from 'styled-components';

const QrcodeContainerS = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const QrcodeTextS = styled.div`
  color: #666666;
  font-weight: 900;
  font-size: 32px;
  text-align: center;
  line-height: 2;
`;
export { QrcodeContainerS, QrcodeTextS };
