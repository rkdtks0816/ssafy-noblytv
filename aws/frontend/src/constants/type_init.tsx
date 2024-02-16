import {
  SignUpType,
  SeniorSignUpType,
  TvSignInType,
  SignInType,
  UserInfoType,
  OldUserInfoType,
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

const oldUserInfoInit: OldUserInfoType = {
  userId: '',
  username: '',
  lunarSolar: '',
  birth: '',
  diaries: [],
  quizResults: [],
  gymnastics: [],
  schedules: [],
  posts: [],
  familyposts: [],
  userType: '',
};
export {
  signUpInit,
  seniorSignUpInit,
  tvSignInInit,
  signInInit,
  userInfoInit,
  oldUserInfoInit,
};
