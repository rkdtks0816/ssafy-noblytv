import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {
  BASE_URL,
  API_PORT,
  API_FAMILY_SIGN_IN,
  PATH_SENIOR_CONNECT,
  PATH_MAIN,
} from '../constants/constants';
import { SignInType, SignInResType } from '../types/api_types';
import getUserInfo from './getUserInfo';
import getOldUserInfo from './getOldUserInfo';

interface PostSignInProps {
  signInData: SignInType;
  navigate: ReturnType<typeof useNavigate>;
  errorFunc?: () => void;
}

async function postSignIn({
  signInData,
  navigate,
  errorFunc,
}: PostSignInProps) {
  console.log(signInData);
  try {
    const response = await axios.post(
      `${BASE_URL}:${API_PORT}${API_FAMILY_SIGN_IN}`,
      signInData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const data = response.data as SignInResType;
    Cookies.set('grantType', data.grantType, { expires: 7 });
    Cookies.set('accessToken', data.accessToken, { expires: 7 });
    Cookies.set('refreshToken', data.refreshToken, { expires: 7 });
    Cookies.set('userId', signInData.userId, { expires: 7 });
    await getUserInfo({
      successFunc: userInfoData => {
        if (!userInfoData.lastVisitedId) {
          navigate(PATH_SENIOR_CONNECT);
        } else {
          Cookies.set('oldUserId', userInfoData.lastVisitedId, { expires: 7 });
          getOldUserInfo({
            successFunc: oldUserInfoData => {
              Cookies.set('oldUsername', oldUserInfoData.username, {
                expires: 7,
              });
              navigate(PATH_MAIN);
            },
          }).catch(error => console.error('Axios error:', error));
        }
      },
    });
  } catch (error) {
    console.error('Axios error:', error);
    if (errorFunc) {
      errorFunc();
    }
  }
  return null;
}

export default postSignIn;
