import {
  SignUpType,
  SeniorSignUpType,
  TvSignInType,
  SignInType,
} from '../types/api_types';

const signUpInit: SignUpType = {
  userId: '',
  userName: '',
  password: '',
  lunarSolar: '',
  birth: '',
  oldUserId: [],
};
const seniorSignUpInit: SeniorSignUpType = {
  userName: '',
  birth: '',
  lunarSolar: '',
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
