interface UserInfoT {
  userId: string;
  username: string;
  password: string;
  lunarSolar: LunarSolar;
  birth: string;
  oldUserIds: string[];
}

enum LunarSolar {
  LUNAR = 'LUNAR',
  SOLAR = 'SOLAR',
}

export type { UserInfoT };
export { LunarSolar };
