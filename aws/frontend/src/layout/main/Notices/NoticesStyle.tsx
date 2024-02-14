import styled from 'styled-components';

const NoticesListBoxS = styled.div`
  width: 90vw;
  max-width: 350px;
  margin-top: 20px;
`;

const NoticesListUlS = styled.div`
  width: 100%;
`;

const NoticesListLiS = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: 10px;
  background: #ffffff;
  margin: 10px 0;
`;

const NoticesListLiContentsS = styled.div`
  padding: 15px;
  font-size: 1em;
  color: #000000;
  margin-right: auto;
`;

export {
  NoticesListBoxS,
  NoticesListUlS,
  NoticesListLiS,
  NoticesListLiContentsS,
};
