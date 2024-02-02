import Cookies from 'js-cookie';
import {
  HeaderBgS,
  SeniorNameS,
  SeniorTitleS,
  NoticeIconS,
} from './HeaderStyle';

function Header() {
  const oldUsername = Cookies.get('oldUsername');
  return (
    <div>
      <HeaderBgS>
        <SeniorNameS to="/select-senior">{oldUsername}</SeniorNameS>
        <SeniorTitleS>어르신</SeniorTitleS>
        <NoticeIconS to="/alarm" />
      </HeaderBgS>
    </div>
  );
}
export default Header;
