import {
  SignUpType,
  SeniorSignUpType,
  TvSignInType,
  SignInType,
} from '../types/api';

const signUpInit: SignUpType = {
  userId: '',
  userName: '',
  password: '',
  lunarSloar: '',
  birth: '',
  oldUserId: [],
};
const seniorSignUpInit: SeniorSignUpType = {
  userName: '',
  birth: '',
  lunarSloar: '',
  gender: '',
  medications: [],
};
const tvSignInInit: TvSignInType = {
  tvCode: '',
  userId: '',
};
const signInInit: SignInType = {
  userId: '',
  password: '',
};

export { signUpInit, seniorSignUpInit, tvSignInInit, signInInit };
