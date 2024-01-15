// store/userStore.tsx
import { create } from 'zustand';
import axios from 'axios';

import { UserInfo } from '../types/userInfo';

interface UserStoreState {
  // 'userInfo' 속성은 'UserInfo' 타입을 가지며, 사용자 정보를 저장합니다.
  userInfo: UserInfo;

  // 'updateUserInfo'는 제네릭 함수 타입의 속성.
  // '<Key extends keyof UserInfo>'는 제네릭 타입 'Key'가 'UserInfo' 타입의 모든 키 중 하나.
  // 첫 번째 매개변수 'key'는 'UserInfo' 타입. 'Key' 타입은 'UserInfo'의 모든 키 중 하나를 의미.
  // 두 번째 매개변수 'value'는 'UserInfo[Key]' 타입. 이는 'key'에 해당하는 'UserInfo' 속성의 타입에 따라 결정.
  // 예를 들어, 'key'가 'UserInfo'의 'age' 속성이면, 'value'는 'number' 타입.
  // 함수의 반환 타입은 'void'로, 이 함수는 반환값이 없으며, 상태 업데이트을 위해 사용.
  updateUserInfo: <Key extends keyof UserInfo>(
    key: Key,
    value: UserInfo[Key],
  ) => void;

  // signUp' 메서드는 'UserInfo' 타입의 객체를 인자로 받아 회원가입 처리를 수행하는 비동기 함수.
  // 이 함수는 'userData'라는 'UserInfo' 타입의 인자를 받아 서버에 회원가입 요청.
  // 함수의 반환 타입은 'Promise<void>'로, 비동기 처리가 완료될 때까지 기다린 후 성공 또는 실패의 결과를 반환.
  // 성공적인 회원가입 시나리오에서는 특별한 반환 값이 없으며('void'), 오류가 발생할 경우 Promise는 오류를 캐치.
  signUp: (userData: UserInfo) => Promise<void>;
}

const useUserStore = create<UserStoreState>((set) => ({
  userInfo: {
    id: 0,
    userId: '',
    password: '',
    name: '',
    phoneNumber: '',
    diseases: [],
    birth: '',
    medications: [],
    familyMembers: [],
  },

  updateUserInfo: (key, value) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    set((state) => ({ userInfo: { ...state.userInfo, [key]: value } })),

  signUp: async (userData: UserInfo) => {
    try {
      // 회원가입 API 엔드포인트.
      const apiUrl = 'http://example.com/api/signup';

      // axios를 사용하여 회원가입 정보를 서버로
      const response = await axios.post(apiUrl, userData);

      // 성공 및 실패
      console.log(response.data);
      window.alert('회원가입이 완료되었습니다.');
    } catch (error) {
      // 오류 메시지 표시
      window.alert('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  },
}));

export default useUserStore;

// export 해야하는 변수와 함수 : 유저 정보, 회원가입, 로그인, 로그인 여부 체크, 로그인 토큰, 로그아웃, 회원탈퇴
