import { create } from 'zustand';

interface PopupContentsStoreState {
  popupContents: string;
  setPopupContents: (setData: string) => void;
}

const usePopupContents = create<PopupContentsStoreState>(set => ({
  popupContents: '',
  setPopupContents: setData =>
    set({
      popupContents: setData,
    }),
}));

export default usePopupContents;
