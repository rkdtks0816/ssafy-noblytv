import { SeniorInfoT, LunarSolar, Gender } from './SeniorSignUpType';

const seniorInfoInit: SeniorInfoT = {
  userId: '',
  userName: '',
  birth: '',
  lunarSloar: LunarSolar.SOLAR,
  gender: Gender.MALE,
  medications: [],
  medicine: '',
  medicationTimes: '',
};

export default seniorInfoInit;
