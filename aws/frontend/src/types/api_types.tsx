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

interface UserInfoGetOldInfoType {
  oldUserInfo: {
    userId: string;
    username: string;
  };
}

interface UserInfoType {
  userId: string;
  username: string;
  lunarSolar: string;
  birth: string;
  familyRelations: UserInfoGetOldInfoType[];
  lastVisitedId?: string;
  userType: string;
}

interface DiaryResType {
  id: number;
  date: string;
  text: string;
  summary: string;
}

interface GymnasticsType {
  day: string;
  keyword: string;
}

interface GymnasticsResType {
  id: number;
  day: string;
  keyword: string;
  title: string;
  videoId: string;
}

interface PostsResType {
  videoPath: string;
  postedAt: string;
}

interface FamilyPostsResType {
  username: string;
  videoPath: string;
  postedAt: string;
}

interface SchedulesResType {
  registeredTime: string;
  schedule: string;
  scheduleDay: string;
  scheduleTime: string;
}

interface OldUserInfoType {
  userId: string;
  username: string;
  lunarSolar: string;
  birth: string;
  diaries: DiaryResType[];
  quizResults: string[];
  gymnastics: GymnasticsResType[];
  schedules: SchedulesResType[];
  posts: PostsResType[];
  familyposts: FamilyPostsResType[];
  userType: string;
}

interface AlarmType {
  alarm: string;
  alarmTime: string;
}

export type {
  SignUpType,
  SeniorSignUpType,
  TvSignInType,
  SignInType,
  SignInResType,
  DiaryResType,
  UserInfoGetOldInfoType,
  UserInfoType,
  GymnasticsType,
  GymnasticsResType,
  SchedulesResType,
  PostsResType,
  FamilyPostsResType,
  OldUserInfoType,
  AlarmType,
};
