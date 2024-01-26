import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

// 사용자 타입 정의
export interface User {
  userId: string;
  username: string;
  password: string;
  lunarSloar?: string;
  birth?: string;
  oldUserId: string;
}

// 스토어의 상태 타입 정의
interface UserState {
  users: User[];
  currentUser: User | null; // 현재 사용자 정보 추가
  addUser: (newUser: User) => void;
  setCurrentUser: (userInfo: User) => void; // 현재 사용자 정보를 설정하는 함수 타입 정의
  updateLastUserPassword: (newPassword: string) => void; // 현재 사용자 정보에 비밀번호를 설정하는 함수 타입 정의
  updateBrithday: (newBrithday: string) => void; // 현재 사용자 정보에 생일을 설정하는 함수 타입 정의
  updateLunarSloar: (newLunarSloar: string) => void; // 현재 사용자 정보에 음력 양력을 설정하는 함수 타입 설정
  updateOldUserId: (newOldUserId: string) => void; // 현재 사용자 정보에 어르신 고유 코드를 설정하는 함수 타입 설정
}

const useUserStore = create(
  persist(
    devtools<UserState>(
      set => ({
        users: [],
        currentUser: null,
        addUser: newUser =>
          set(state => ({ users: [...state.users, newUser] })),
        setCurrentUser: userInfo => set({ currentUser: userInfo }),

        updateLastUserPassword: newPassword =>
          set(state => {
            const users = [...state.users];
            if (users.length > 0) {
              users[users.length - 1].password = newPassword;
            }
            return { users };
          }),

        updateBrithday: newBrithday =>
          set(state => {
            const users = [...state.users];
            if (users.length > 0) {
              users[users.length - 1].birth = newBrithday;
            }
            return { users };
          }),

        updateLunarSloar: newLunarSloar =>
          set(state => {
            const users = [...state.users];
            if (users.length > 0) {
              users[users.length - 1].lunarSloar = newLunarSloar;
            }
            return { users };
          }),

        updateOldUserId: newOldUserId =>
          set(state => {
            const users = [...state.users];
            if (users.length > 0) {
              users[users.length - 1].oldUserId = newOldUserId;
            }
            return { users };
          }),
      }),
      {
        name: 'userStore',
      },
    ),
    {
      name: 'user-storage',
      getStorage: () => localStorage,
    },
  ),
);

export default useUserStore;
