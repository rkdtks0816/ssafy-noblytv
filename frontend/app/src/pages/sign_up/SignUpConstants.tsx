import { UserInfoT, LunarSolar } from './SignUpType';

const userInfoInit: UserInfoT = {
  userId: '',
  username: '',
  password: '',
  lunarSolar: LunarSolar.SOLAR,
  birth: '',
  oldUserIds: [],
};

export default userInfoInit;
