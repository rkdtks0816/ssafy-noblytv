import { create } from 'zustand';

// 유저 정보
interface User {
  name: string;
  userId: string;
  password1: string;
  password2: string;
  birthday: string;
  gender: string;
}

// 스토어 상태
interface UserState {
  users: User[];
  addUser: (user: User) => void;
}

const useUserStore = create<UserState>(set => ({
  users: [],
  addUser: user => set(state => ({ users: [...state.users, user] })),
}));

export default useUserStore;
