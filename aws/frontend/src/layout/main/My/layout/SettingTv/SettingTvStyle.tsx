import styled from 'styled-components';

const SettingTvTitleS = styled.div`
  font-size: 0.9em;
  color: #000000;
  margin: 50px auto 0 15px;
`;

const SettingTvListS = styled.div`
  width: 90vw;
  max-width: 400px;
  border-radius: 10px;
  background: #ffffff;
  margin-top: 6px;
`;

const SettingTvListItemS = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SettingTvListItemTitleS = styled.div`
  padding: 15px;
  font-size: 1em;
  color: #000000;
  margin-right: auto;
`;

const SettingTvListItemValueS = styled.div`
  padding: 15px 0 15px 15px;
  font-size: 1em;
  color: #888888;
`;

const SettingTvArrowS = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 15px 0 5px;
  background: url('/icon/icon_right_arrow.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

const SettingTvDividerS = styled.div`
  width: 90%;
  height: 1px;
  background: #888888;
  margin: 0 auto;
`;

export {
  SettingTvTitleS,
  SettingTvListS,
  SettingTvListItemS,
  SettingTvListItemTitleS,
  SettingTvListItemValueS,
  SettingTvArrowS,
  SettingTvDividerS,
};
