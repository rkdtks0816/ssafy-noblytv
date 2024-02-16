import useMenuStore from '../../store/useMenuStore';
import usePopupContentsStore from '../../store/usePopupContents';
import useRedirectStore from '../../store/useRedirectStore';
import { PopupBoxS, PopupContentsS, PopupTitleS } from './PopupStyle';

function Popup() {
  const { popupContents, setPopupContents } = usePopupContentsStore();
  const { setNowMenu } = useMenuStore();
  const { redirectPath } = useRedirectStore();
  const handleBtnClick = () => {
    setNowMenu(redirectPath);
    setPopupContents('');
  };
  return (
    <PopupBoxS $isPopup={popupContents} onClick={handleBtnClick}>
      <PopupTitleS>알림</PopupTitleS>
      <PopupContentsS>{popupContents}</PopupContentsS>
    </PopupBoxS>
  );
}

export default Popup;
