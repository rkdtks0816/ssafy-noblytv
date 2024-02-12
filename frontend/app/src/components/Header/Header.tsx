import {
  HeaderBgS,
  SeniorNameS,
  SeniorTitleS,
  NoticeIconS,
} from './HeaderStyle';
import useOldUserStore from '../../store/useOldUserStore';

function Header({
  setIsOnSelectSenior,
}: {
  setIsOnSelectSenior: (isOnSelectSenior: boolean) => void;
}) {
  const { oldUsername } = useOldUserStore();
  return (
    <div>
      <HeaderBgS>
        <SeniorNameS onClick={() => setIsOnSelectSenior(true)}>
          {oldUsername}
        </SeniorNameS>
        <SeniorTitleS>어르신</SeniorTitleS>
        <NoticeIconS />
      </HeaderBgS>
    </div>
  );
}
export default Header;
