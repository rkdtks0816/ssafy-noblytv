export interface UserInfoT {
  userId: string;
  userName: string;
  password: string;
  lunarSloar: LunarSolar;
  birth: string;
  oldUserId: string[];
}

export enum LunarSolar {
  Lunar = 'Lunar',
  Solar = 'Solar',
}
