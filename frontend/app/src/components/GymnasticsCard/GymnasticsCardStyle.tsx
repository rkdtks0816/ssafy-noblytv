import styled from 'styled-components';

const GymnasticsBoxS = styled.div`
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

const GymnasticsCardS = styled.div`
  width: 100vw;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GymnasticsHeaderS = styled.div`
  position: relative;
  width: 350px;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const GymnasticsDayS = styled.div`
  font-weight: 900;
  font-size: 20px;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GymnasticsVideoS = styled.div`
  width: 350px;
  height: 197px;
  margin-top: 10px;
  border-radius: 10px 10px 0 0;
  padding: 10px;

  background: #f1dcaa;

  font-weight: 400;
  font-size: 30px;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GymnasticsTitleS = styled.div`
  width: 350px;
  border-radius: 0 0 10px 10px;
  padding: 10px;

  background: #f1dcaa;

  font-weight: 400;
  font-size: 30px;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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
  GymnasticsTitleS,
};
