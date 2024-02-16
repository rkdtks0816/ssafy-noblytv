import BackBtnStyle from '../../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../../components/FlexBox/FlexBoxStyle';
import LargeBtnStyle from '../../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../../components/MenuTitle/MenuTitleStyle';
import { PATH_COMMUNITY, PATH_MY_MAIN } from '../../../constants/constants';
import {
  NoticesListBoxS,
  NoticesListUlS,
  NoticesListLiS,
  NoticesListLiContentsS,
  NoticeDeleteBtn,
  NoticesListLiDateS,
} from './NoticesStyle';
import useAlarmsStore from '../../../store/useAlarmsStore';
import useMenuStore from '../../../store/useMenuStore';

function Notices({ setSubMenu }: { setSubMenu: (subMenu: string) => void }) {
  const { alarms, setAlarms } = useAlarmsStore();
  const { setNowMenu } = useMenuStore();

  const handleBackBtn = () => {
    setSubMenu(PATH_MY_MAIN);
  };

  const handleSubmit = () => {
    setSubMenu('');
  };

  const handleAlarmClick = () => {
    setSubMenu('');
    setNowMenu(PATH_COMMUNITY);
  };

  const deleteAlarm = (index: number) => {
    alarms.splice(index, 1);
    setAlarms(alarms);
  };

  return (
    <BgImgStyle>
      <FlexBoxStyle>
        <BackBtnStyle onClick={handleBackBtn} />
        <MenuTitleStyle>알림</MenuTitleStyle>
        <NoticesListBoxS>
          <NoticesListUlS>
            {alarms.map((alarm, index) => (
              <NoticesListLiS key={alarm.alarmTime}>
                <div onClick={() => handleAlarmClick()}>
                  <NoticesListLiDateS>{alarm.alarmTime}</NoticesListLiDateS>
                  <NoticesListLiContentsS>{alarm.alarm}</NoticesListLiContentsS>
                </div>
                <NoticeDeleteBtn
                  onClick={() => {
                    deleteAlarm(index);
                  }}
                />
              </NoticesListLiS>
            ))}
          </NoticesListUlS>
        </NoticesListBoxS>
      </FlexBoxStyle>
      <FlexBoxStyle>
        <LargeBtnStyle style={{ marginBottom: '10vh' }} onClick={handleSubmit}>
          확인
        </LargeBtnStyle>
      </FlexBoxStyle>
    </BgImgStyle>
  );
}

export default Notices;
