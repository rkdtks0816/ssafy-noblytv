interface SeniorInfoT {
  userId: string;
  userName: string;
  birth: string;
  lunarSloar: LunarSolar;
  gender: Gender;
  medications: string[]; // 또는 medications: Array<string>; 으로 작성 가능
  medicine: string;
  medicationTimes: string;
}

enum LunarSolar {
  LUNAR = 'LUNAR',
  SOLAR = 'SOLAR',
}

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type { SeniorInfoT };
export { LunarSolar, Gender };
