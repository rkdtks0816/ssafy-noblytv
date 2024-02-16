import { create } from 'zustand';
import Cookies from 'js-cookie';

interface OldUserStoreState {
  oldUserId: string;
  setOldUserId: (setData: string) => void;
  oldUsername: string;
  setOldUsername: (setData: string) => void;
}

const useOldUserStore = create<OldUserStoreState>(set => ({
  oldUserId: Cookies.get('oldUserId') || '',
  setOldUserId: setData => {
    if (!setData) {
      Cookies.remove('oldUserId');
    } else {
      Cookies.set('oldUserId', setData, { expires: 7 });
    }
    set({ oldUserId: setData });
  },
  oldUsername: Cookies.get('oldUsername') || '',
  setOldUsername: setData => {
    if (!setData) {
      Cookies.remove('oldUsername');
    } else {
      Cookies.set('oldUsername', setData, { expires: 7 });
    }
    set({ oldUsername: setData });
  },
}));

export default useOldUserStore;
