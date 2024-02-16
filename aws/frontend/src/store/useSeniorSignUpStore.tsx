import { create } from 'zustand';
import { SeniorSignUpType } from '../types/api_types';
import { seniorSignUpInit } from '../constants/type_init';

interface SeniorSignUpStoreState {
  seniorSignUpInfo: SeniorSignUpType;
  setSeniorSignUpInfo: (setData: SeniorSignUpType) => void;
}

const useSeniorSignUpStore = create<SeniorSignUpStoreState>(set => ({
  seniorSignUpInfo: seniorSignUpInit,
  setSeniorSignUpInfo: setData => {
    set({ seniorSignUpInfo: setData });
  },
}));

export default useSeniorSignUpStore;
