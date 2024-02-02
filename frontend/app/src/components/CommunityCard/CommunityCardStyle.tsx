import styled from 'styled-components';

const CommunityCardBoxS = styled.div`
  position: fixed;
  top: 90px;
  left: 0px;
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

const CommunityCardCardS = styled.div`
  width: 100vw;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CommunityCardHeaderS = styled.div`
  width: 350px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommunityCardWriterS = styled.div`
  font-weight: 900;
  font-size: 30px;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CommunityCardVideoS = styled.video`
  margin-top: 10px;
  width: 350px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export {
  CommunityCardBoxS,
  CommunityCardCardS,
  CommunityCardHeaderS,
  CommunityCardWriterS,
  CommunityCardVideoS,
};
