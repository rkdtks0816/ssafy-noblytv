import { create } from 'zustand';
import Cookies from 'js-cookie';

interface UserStoreState {
  grantType: string;
  setGrantType: (setData: string) => void;
  accessToken: string;
  setAccessToken: (setData: string) => void;
  refreshToken: string;
  setRefreshToken: (setData: string) => void;
  userId: string;
  setUserId: (setData: string) => void;
}

const useUserStore = create<UserStoreState>(set => ({
  grantType: Cookies.get('grantType') || '',
  setGrantType: setData => {
    if (!setData) {
      Cookies.remove('grantType');
    } else {
      Cookies.set('grantType', setData, { expires: 7 });
    }
    set({ grantType: setData });
  },
  accessToken: Cookies.get('accessToken') || '',
  setAccessToken: setData => {
    if (!setData) {
      Cookies.remove('accessToken');
    } else {
      Cookies.set('accessToken', setData, { expires: 7 });
    }
    set({ accessToken: setData });
  },
  refreshToken: Cookies.get('refreshToken') || '',
  setRefreshToken: setData => {
    if (!setData) {
      Cookies.remove('refreshToken');
    } else {
      Cookies.set('refreshToken', setData, { expires: 7 });
    }
    set({ refreshToken: setData });
  },
  userId: Cookies.get('userId') || '',
  setUserId: setData => {
    if (!setData) {
      Cookies.remove('userId');
    } else {
      Cookies.set('userId', setData, { expires: 7 });
    }
    set({ userId: setData });
  },
}));

export default useUserStore;
