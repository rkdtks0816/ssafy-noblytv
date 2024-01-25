import {
  HeaderBgS,
  SeniorNameS,
  SeniorTitleS,
  NoticeIconS,
} from './HeaderStyle';

function Header() {
  return (
    <div>
      <HeaderBgS>
        <SeniorNameS to="/select-senior">이세종</SeniorNameS>
        <SeniorTitleS>어르신</SeniorTitleS>
        <NoticeIconS to="/alarm" />
      </HeaderBgS>
    </div>
  );
}
export default Header;
