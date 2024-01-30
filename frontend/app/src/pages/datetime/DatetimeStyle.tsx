import styled from 'styled-components';

const DateTimeInputS = styled.input`
  border: none;
  width: 100%;
  margin-top: 80px;

  color: #666666;
  font-weight: 900;
  font-size: 32px;
  text-align: center;
  line-height: 2;

  &:focus {
    outline: none;
  }
`;

const DateTimeDiaryS = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;

  background: #f1dcaa;
  background-size: cover;
  background-repeat: no-repeat;

  color: #666666;
  font-weight: 500;
  font-size: 3.5vh;
  line-height: 1.5;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

export { DateTimeInputS, DateTimeDiaryS };
