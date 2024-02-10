import Cookies from 'js-cookie';
import { create } from 'zustand';

interface MenuStoreState {
  nowMenu: string;
  setNowMenu: (selectMenu: string) => void;
}

const useMenuStore = create<MenuStoreState>(set => ({
  nowMenu: Cookies.get('nowMenu') || 'Community',
  setNowMenu: selectMenu => {
    Cookies.set('nowMenu', selectMenu, { expires: 7 });
    set({ nowMenu: selectMenu });
  },
}));

export default useMenuStore;
