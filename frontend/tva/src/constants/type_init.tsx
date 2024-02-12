import {
  SeniorSignUpType,
  SignInType,
  SignUpType,
  TvSignInType,
  UserInfoType,
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

const userInfoInit: UserInfoType = {
  userId: '',
  username: '',
  lunarSolar: '',
  birth: '',
  familyRelations: [],
  lastVisitedId: '',
  userType: '',
};

export { seniorSignUpInit, signInInit, signUpInit, tvSignInInit, userInfoInit };
