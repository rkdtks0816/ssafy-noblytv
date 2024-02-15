import { PATH_COMMUNITY } from '../../constants/constants';
import useMenuStore from '../../store/useMenuStore';
import usePopupContentsStore from '../../store/usePopupContents';
import { PopupBoxS, PopupContentsS, PopupTitleS } from './PopupStyle';

function Popup() {
  const { popupContents, setPopupContents } = usePopupContentsStore();
  const { setNowMenu } = useMenuStore();
  const handleBtnClick = () => {
    setNowMenu(PATH_COMMUNITY);
    setPopupContents('');
  };
  return (
    <PopupBoxS $isPopup={popupContents} onClick={handleBtnClick}>
      <PopupTitleS>게시글 알림</PopupTitleS>
      <PopupContentsS>{popupContents}</PopupContentsS>
    </PopupBoxS>
  );
}

export default Popup;
