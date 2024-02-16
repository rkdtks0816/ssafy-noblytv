import {
  HeaderBgS,
  SeniorNameS,
  SeniorTitleS,
  NoticeIconS,
} from './HeaderStyle';
import useOldUserStore from '../../store/useOldUserStore';
import DropDownIcon from '../DropDownIcon/DropDownIconStyle';
import { PATH_NOTICES, PATH_SELECT_SENIOR } from '../../constants/constants';

function Header({ setSubMenu }: { setSubMenu: (subMenu: string) => void }) {
  const { oldUsername } = useOldUserStore();
  return (
    <div>
      <HeaderBgS>
        <SeniorNameS onClick={() => setSubMenu(PATH_SELECT_SENIOR)}>
          {oldUsername}
        </SeniorNameS>
        <DropDownIcon />
        <SeniorTitleS>어르신</SeniorTitleS>
        <NoticeIconS onClick={() => setSubMenu(PATH_NOTICES)} />
      </HeaderBgS>
    </div>
  );
}
export default Header;
