export interface SeniorInfoT {
  userName: string;
  birth: string;
  lunarSloar: LunarSolar;
  gender: Gender;
  medications: string[]; // 또는 medications: Array<string>; 으로 작성 가능
  medicine: string;
  medicationTimes: string;
}

export enum LunarSolar {
  Lunar = 'Lunar',
  Solar = 'Solar',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
}
