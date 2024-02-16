import styled from 'styled-components';

const MediumBtnStyle = styled.div<{ $mediumBtnColor?: string }>`
  width: 50px;
  height: 30px;

  cursor: pointer;

  background: ${props => props.$mediumBtnColor || '#666666'};
  border-radius: 5px;

  color: #ffffff;
  font-size: 16px;
  font-weight: 900;
  line-height: 1.85;
  text-align: center;
`;

export default MediumBtnStyle;
