import styled from 'styled-components';

const CommunityBoxS = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  top: 0px;
  left: 0px;

  max-height: 100%;
  overflow: hidden;
  overflow-y: auto;

  /* Chrome, Safari, Edge 스크롤 바 숨기기 */
  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }

  /* Firefox 스크롤 바 숨기기 */
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
`;

const CommunityCardS = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  border-bottom: 1px solid #88888830;
  margin: 0 auto 10px auto;
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
  font-size: 1em;
  color: #666666;
`;

const CommunityVideoS = styled.video`
  width: 100%;
  max-width: 500px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const CommunityAddBtnS = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;

  width: 40px;
  height: 40px;

  border-radius: 50%;

  background: url('/icon/icon_add.png');
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
