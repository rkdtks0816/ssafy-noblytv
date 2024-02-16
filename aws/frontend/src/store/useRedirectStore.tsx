import { create } from 'zustand';
import { PATH_MAIN } from '../constants/constants';

interface RedirectState {
  redirectPath: string;
  setRedirectPath: (setData: string) => void;
}

const useRedirectStore = create<RedirectState>(set => ({
  redirectPath: PATH_MAIN,
  setRedirectPath: setData => {
    set({ redirectPath: setData });
  },
}));

export default useRedirectStore;
