import styled from 'styled-components';

const CommunityBoxS = styled.div`
  max-width: 350px;
  margin: 0 auto;
`;

const CommunityCardS = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CommunityHeaderS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommunityWriterS = styled.div`
  font-weight: 900;
  font-size: 1.5em;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CommunityVideoS = styled.video`
  margin-top: 10px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  border-radius: 10px;
`;

const CommunityAddBtnS = styled.div`
  position: fixed;
  right: 20px;
  bottom: 110px;

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
