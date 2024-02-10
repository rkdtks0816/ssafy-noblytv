const BASE_URL: string = 'http://i10c103.p.ssafy.io';
const BASE_PORT: string = '3000';
const API_PORT: string = '8080';
const FILE_SEVER_PORT: string = '8880';
// PATHS
const PATH_SIGN_IN: string = '/sign-in';
const PATH_SIGN_UP: string = '/sign-up';
const PATH_SIGN_UP_NAME_ID: string = `${PATH_SIGN_UP}/name-id`;
const PATH_SIGN_UP_PASSWORD: string = `${PATH_SIGN_UP}/password`;
const PATH_SIGN_UP_BIRTH: string = `${PATH_SIGN_UP}/birth`;
const PATH_SENIOR_CONNECT: string = '/senior-connect';
const PATH_SENIOR_UNIQUE_CODE: string = `/senior_unique-code`;
const PATH_SENIOR_SIGN_UP: string = '/senior-sign-up';
const PATH_SENIOR_SIGN_UP_NAME_GENDER: string = `${PATH_SENIOR_SIGN_UP}/name-gender`;
const PATH_SENIOR_SIGN_UP_BIRTH: string = `${PATH_SENIOR_SIGN_UP}/birth`;
const PATH_CONNECT_TV: string = '/connect-tv';
const PATH_SELECT_SENIOR: string = '/select-senior';
const PATH_MAIN: string = '/';
// API
const API_FAMILY: string = `/users/family`;
const API_FAMILY_SIGN_UP: string = `${API_FAMILY}/signup`;
const API_FAMILY_DUPLICATION: string = `${API_FAMILY}/duplication`;
const API_FAMILY_SIGN_IN: string = `${API_FAMILY}/login`;
const API_FAMILY_SIGN_OUT: string = `${API_FAMILY}/logout`;
const API_FAMILY_DELECT: string = `${API_FAMILY}/delete`;
const API_SENIOR: string = `/users/old`;
const API_SENIOR_SIGN_UP: string = `${API_SENIOR}/signup`;
const API_SENIOR_DELECT: string = `${API_SENIOR}/delete`;
const API_TV: string = `/tv`;
const API_TV_OLD_USERS: string = `${API_TV}/old-users`;
const API_TV_SIGNIN: string = `${API_TV}/login`;
const API_DIARY: string = `/diary`;
const API_DIARY_VIEW: string = `${API_DIARY}/view`;
const API_GYMNASTICS: string = `/gymnastics`;

export {
  BASE_URL,
  BASE_PORT,
  API_PORT,
  FILE_SEVER_PORT,
  // PATH
  PATH_SIGN_IN,
  PATH_SIGN_UP_NAME_ID,
  PATH_SIGN_UP_PASSWORD,
  PATH_SIGN_UP_BIRTH,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SENIOR_SIGN_UP_BIRTH,
  PATH_SENIOR_UNIQUE_CODE,
  PATH_CONNECT_TV,
  PATH_SELECT_SENIOR,
  PATH_MAIN,
  // API
  API_FAMILY,
  API_FAMILY_SIGN_UP,
  API_FAMILY_DUPLICATION,
  API_FAMILY_SIGN_IN,
  API_FAMILY_SIGN_OUT,
  API_FAMILY_DELECT,
  API_SENIOR,
  API_SENIOR_SIGN_UP,
  API_SENIOR_DELECT,
  API_TV_OLD_USERS,
  API_TV_SIGNIN,
  API_DIARY_VIEW,
  API_GYMNASTICS,
};
