export interface SeniorInfoT {
  userId: string;
  userName: string;
  birth: string;
  lunarSloar: LunarSolar;
  gender: Gender;
  medications: string[]; // 또는 medications: Array<string>; 으로 작성 가능
  medicine: string;
  medicationTimes: string;
}

export enum LunarSolar {
  LUNAR = 'LUNAR',
  SOLAR = 'SOLAR',
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}
