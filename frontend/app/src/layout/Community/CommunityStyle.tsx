import styled from 'styled-components';

const CommunityBoxS = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const CommunityCardS = styled.div`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-bottom: 3px solid #88888830;
  margin-bottom: 10px;
`;

const CommunityHeaderS = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommunityWriterS = styled.div`
  margin-left: 10px;
  font-weight: 900;
  font-size: 1.5em;
  color: #666666;
`;

const CommunityVideoS = styled.video`
  width: 95%;
  max-width: 370px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-radius: 10px;
`;

const CommunityAddBtnS = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: url('/src/assets/icon_add.png');
  background-size: cover;
  background-repeat: no-repeat;

  text-decoration: none;
  cursor: pointer;
`;

export {
  CommunityBoxS,
  CommunityCardS,
  CommunityHeaderS,
  CommunityWriterS,
  CommunityVideoS,
  CommunityAddBtnS,
};
