const BASE_URL: string = 'http://i10c103.p.ssafy.io';
// const BASE_URL: string = 'http://localhost';
const BASE_PORT: string = '3000';
const API_PORT: string = '8080';
const FILE_SEVER_PORT: string = '8880';
const SOCKET_PORT: string = '9000';
const YOUTUBE_API_URL: string =
  'https://www.googleapis.com/youtube/v3/videos?part=snippet';
const YOUTUBE_API_KEY: string = 'AIzaSyCC7MzMBiSro7FIgef-CWcSwf17Hh0mZX4';
// PATHS
const PATH_SIGN_IN: string = '/sign-in';
const PATH_SIGN_UP: string = '/sign-up';
const PATH_SIGN_UP_NAME_ID: string = `${PATH_SIGN_UP}/name-id`;
const PATH_SIGN_UP_PASSWORD: string = `${PATH_SIGN_UP}/password`;
const PATH_SIGN_UP_BIRTH: string = `${PATH_SIGN_UP}/birth`;
const PATH_SENIOR_CONNECT: string = '/senior-connect';
const PATH_SENIOR_SIGN_UP: string = '/senior-sign-up';
const PATH_SENIOR_SIGN_UP_NAME_GENDER: string = `${PATH_SENIOR_SIGN_UP}/name-gender`;
const PATH_SENIOR_SIGN_UP_BIRTH: string = `${PATH_SENIOR_SIGN_UP}/birth`;
const PATH_SENIOR_SIGN_UP_UNIQUE_CODE: string = `${PATH_SENIOR_SIGN_UP}/unique-code`;
const PATH_CONNECT_TV: string = '/connect-tv';
const PATH_SELECT_SENIOR: string = '/select-senior';
const PATH_COMMUNITY: string = '/community';
const PATH_DATETIME: string = '/datetime';
const PATH_GYMNASTICS: string = '/gymnastics';
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
  API_DIARY_VIEW,
  // API
  API_FAMILY,
  API_FAMILY_DELECT,
  API_FAMILY_DUPLICATION,
  API_FAMILY_SIGN_IN,
  API_FAMILY_SIGN_OUT,
  API_FAMILY_SIGN_UP,
  API_GYMNASTICS,
  API_PORT,
  API_SENIOR,
  API_SENIOR_DELECT,
  API_SENIOR_SIGN_UP,
  API_TV_OLD_USERS,
  API_TV_SIGNIN,
  BASE_PORT,
  BASE_URL,
  FILE_SEVER_PORT,
  PATH_COMMUNITY,
  PATH_CONNECT_TV,
  PATH_DATETIME,
  PATH_GYMNASTICS,
  PATH_SELECT_SENIOR,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP_BIRTH,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SENIOR_SIGN_UP_UNIQUE_CODE,
  // PATH
  PATH_SIGN_IN,
  PATH_SIGN_UP_BIRTH,
  PATH_SIGN_UP_NAME_ID,
  PATH_SIGN_UP_PASSWORD,
  SOCKET_PORT,
  YOUTUBE_API_KEY,
  YOUTUBE_API_URL,
};
