import styled from 'styled-components';

const GymnasticsBoxS = styled.div`
  width: 90%;
  max-width: 350px;
  margin: 0 auto;
`;

const GymnasticsCardS = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const GymnasticsHeaderS = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const GymnasticsDayS = styled.div`
  font-weight: 900;
  font-size: 1em;

  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GymnasticsVideoS = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;

  background: #f1dcaa;

  font-weight: 400;
  font-size: 1.5em;
  color: #666666;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const GymnasticsTitleS = styled.div`
  margin-top: 15px;

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
  GymnasticsTitleS,
};
