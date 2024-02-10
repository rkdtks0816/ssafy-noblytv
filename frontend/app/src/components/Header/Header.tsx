import Cookies from 'js-cookie';
import {
  HeaderBgS,
  SeniorNameS,
  SeniorTitleS,
  NoticeIconS,
} from './HeaderStyle';
import { PATH_MAIN, PATH_SELECT_SENIOR } from '../../constants/constants';

function Header() {
  const oldUsername = Cookies.get('oldUsername');
  return (
    <div>
      <HeaderBgS>
        <SeniorNameS to={PATH_SELECT_SENIOR} state={PATH_MAIN}>
          {oldUsername}
        </SeniorNameS>
        <SeniorTitleS>어르신</SeniorTitleS>
        <NoticeIconS to="/alarm" />
      </HeaderBgS>
    </div>
  );
}
export default Header;
