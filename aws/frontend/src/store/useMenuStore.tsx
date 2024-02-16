import Cookies from 'js-cookie';
import { create } from 'zustand';

interface MenuStoreState {
  nowMenu: string;
  setNowMenu: (setData: string) => void;
}

const useMenuStore = create<MenuStoreState>(set => ({
  nowMenu: Cookies.get('nowMenu') || 'Community',
  setNowMenu: setData => {
    if (!setData) {
      Cookies.remove('nowMenu');
    } else {
      Cookies.set('nowMenu', setData, { expires: 7 });
    }
    set({ nowMenu: setData });
  },
}));

export default useMenuStore;
