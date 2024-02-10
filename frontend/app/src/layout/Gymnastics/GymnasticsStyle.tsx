import styled from 'styled-components';
import YouTube from 'react-youtube';

const GymnasticsBoxS = styled.div`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

const GymnasticsCardS = styled.div`
  margin-bottom: 20px;
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
  background: #f1dcaa;
  font-weight: 400;
  font-size: 1.5em;
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
