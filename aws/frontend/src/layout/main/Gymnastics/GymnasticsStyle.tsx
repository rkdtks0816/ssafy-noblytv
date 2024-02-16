import styled from 'styled-components';
import YouTube from 'react-youtube';

const GymnasticsBoxS = styled.div`
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

const GymnasticsCardS = styled.div`
  width: 90%;
  max-width: 400px;
  margin: 0 auto 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GymnasticsHeaderS = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const GymnasticsDayS = styled.div`
  font-weight: 900;
  font-size: 1em;
  color: #666666;
`;

const GymnasticsVideoS = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 10px;
  background: #fce8c3;
  font-weight: 400;
  font-size: 1.2em;
  color: #666666;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.25));
`;

const GymnasticsYoutubeS = styled(YouTube)`
  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px 10px 0 0;
  }
`;

const GymnasticsTitleS = styled.div`
  padding: 12px;
  font-weight: 400;
  font-size: 0.7em;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export {
  GymnasticsBoxS,
  GymnasticsCardS,
  GymnasticsHeaderS,
  GymnasticsDayS,
  GymnasticsVideoS,
  GymnasticsYoutubeS,
  GymnasticsTitleS,
};
