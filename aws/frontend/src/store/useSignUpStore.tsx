import { create } from 'zustand';
import { SignUpType } from '../types/api_types';
import { signUpInit } from '../constants/type_init';

interface SignUpStoreState {
  signUpInfo: SignUpType;
  setSignUpInfo: (setData: SignUpType) => void;
}

const useSignUpStore = create<SignUpStoreState>(set => ({
  signUpInfo: signUpInit,
  setSignUpInfo: setData => {
    set({ signUpInfo: setData });
  },
}));

export default useSignUpStore;
