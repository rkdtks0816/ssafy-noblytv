interface SignUpType {
  userId: string;
  username: string;
  password: string;
  lunarSolar: string;
  birth: string;
  oldUserIds: string[];
}

interface Medication {
  medicine: string;
  medicationTime: string;
}

interface SeniorSignUpType {
  username: string;
  birth: string;
  lunarSolar: string;
  gender: string;
  medications: Medication[];
}

interface TvSignInType {
  tvCode: string;
  userId: string;
}

interface SignInType {
  userId: string;
  password: string;
}

interface SignInResType {
  grantType: string;
  accessToken: string;
  refreshToken: string;
}

interface DiaryResType {
  id: number;
  date: string;
  text: string;
  summary: string;
}

interface UserInfoGetOldInfoType {
  userId: string;
  username: string;
}

interface UserInfoType {
  userId: string;
  username: string;
  lunarSolar: string;
  birth: string;
  familyRelations: UserInfoGetOldInfoType[];
  lastVisitedId: string;
  userType: string;
}

interface GymnasticsType {
  day: string;
  keyword: string;
  title: string;
  videoId: string;
}

export type {
  SignUpType,
  SeniorSignUpType,
  TvSignInType,
  SignInType,
  SignInResType,
  DiaryResType,
  UserInfoType,
  GymnasticsType,
};
