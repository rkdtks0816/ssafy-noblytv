import {
  SignUpType,
  SeniorSignUpType,
  TvSignInType,
  SignInType,
} from '../types/api_types';

const signUpInit: SignUpType = {
  userId: '',
  username: '',
  password: '',
  lunarSolar: 'SOLAR',
  birth: '',
  oldUserIds: [],
};
const seniorSignUpInit: SeniorSignUpType = {
  username: '',
  birth: '',
  lunarSolar: 'SOLAR',
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
