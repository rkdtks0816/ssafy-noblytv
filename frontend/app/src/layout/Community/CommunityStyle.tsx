import styled from 'styled-components';

const CommunityBoxS = styled.div`
  position: fixed;
  top: 90px;
  left: 0px;
  margin: 0 auto;
  width: 390px;

  max-height: calc(100vh - 180px);
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
  width: 100vw;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CommunityHeaderS = styled.div`
  width: 350px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommunityWriterS = styled.div`
  font-weight: 900;
  font-size: 30px;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CommunityVideoS = styled.video`
  margin-top: 10px;
  width: 350px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export {
  CommunityBoxS,
  CommunityCardS,
  CommunityHeaderS,
  CommunityWriterS,
  CommunityVideoS,
};
