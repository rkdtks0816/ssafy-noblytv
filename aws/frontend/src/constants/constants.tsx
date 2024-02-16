const BASE_URL: string = 'http://i10c103.p.ssafy.io';
const BASE_PORT: string = '80';
const API_PORT: string = '8080';
const FILE_SEVER_PORT: string = '8880';
const SOCKET_PORT: string = '9000';
// PATHS
const PATH_SIGN_IN: string = '/sign-in';
const PATH_SIGN_UP: string = '/sign-up';
const PATH_SIGN_UP_NAME_ID: string = `NameId`;
const PATH_SIGN_UP_PASSWORD: string = `Password`;
const PATH_SIGN_UP_BIRTH: string = `Birth`;
const PATH_SENIOR_CONNECT: string = '/senior-connect';
const PATH_SENIOR_UNIQUE_CODE: string = `/senior-unique-code`;
const PATH_SENIOR_SIGN_UP: string = '/senior-sign-up';
const PATH_SENIOR_SIGN_UP_NAME_GENDER: string = 'SeniorNameGender';
const PATH_SENIOR_SIGN_UP_BIRTH: string = 'SeniorBirth';
const PATH_CONNECT_TV: string = '/connect-tv';
const PATH_SELECT_SENIOR: string = 'SelectSenior';
const PATH_NOTICES: string = 'Notices';
const PATH_MAIN: string = '/';
const PATH_COMMUNITY: string = 'Community';
const PATH_DATETIME: string = 'Datetime';
const PATH_GYMNASTICS: string = 'Gymnastics';
const PATH_MY: string = 'My';
const PATH_MY_MAIN: string = 'MyMain';
const PATH_SETTING_TV: string = 'SettingTv';
const PATH_LOADING: string = 'Loading';
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
const API_GYMNASTICS: string = `/gymnastics`;
const API_POSTS: string = `/posts/family`;
// Text
const TEXT_POST_UP = '🤸‍♂️어르신 체조 영상을 확인하세요!';
const TEXT_FALL = '⚠ 어르신 낙상이 감지되었어요!';
const TEXT_DIARY_UP = '📔어르신 일기를 확인하세요!';

export {
  BASE_URL,
  BASE_PORT,
  API_PORT,
  FILE_SEVER_PORT,
  SOCKET_PORT,
  // PATH
  PATH_SIGN_IN,
  PATH_SIGN_UP,
  PATH_SIGN_UP_NAME_ID,
  PATH_SIGN_UP_PASSWORD,
  PATH_SIGN_UP_BIRTH,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_SIGN_UP,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SENIOR_SIGN_UP_BIRTH,
  PATH_SENIOR_UNIQUE_CODE,
  PATH_CONNECT_TV,
  PATH_SELECT_SENIOR,
  PATH_NOTICES,
  PATH_MAIN,
  PATH_COMMUNITY,
  PATH_DATETIME,
  PATH_GYMNASTICS,
  PATH_MY,
  PATH_MY_MAIN,
  PATH_SETTING_TV,
  PATH_LOADING,
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
  API_GYMNASTICS,
  API_POSTS,
  // TEXT
  TEXT_POST_UP,
  TEXT_FALL,
  TEXT_DIARY_UP,
};
