interface UserInfoT {
  userId: string;
  userName: string;
  password: string;
  lunarSloar: LunarSolar;
  birth: string;
  oldUserId: string[];
}

enum LunarSolar {
  Lunar = 'Lunar',
  Solar = 'Solar',
}

export type { UserInfoT };
export { LunarSolar };
