import axios from 'axios';
import Cookies from 'js-cookie';
import {
  BASE_URL,
  API_PORT,
  API_FAMILY_SIGN_IN,
  API_FAMILY,
} from '../constants/api';
import { SignInType, SignInResType, UserInfoType } from '../types/api_types';

interface ApiSignInProps {
  signInData: SignInType;
  successFunc: () => void;
  errorFunc?: () => void;
}

async function apiSignIn({
  signInData,
  successFunc,
  errorFunc,
}: ApiSignInProps) {
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
    const UserinfoResponse = await axios.get(
      `${BASE_URL}:${API_PORT}${API_FAMILY}/${signInData.userId}`,
      { headers: { Authorization: `${data.grantType} ${data.accessToken}` } },
    );
    const UserinfoData = UserinfoResponse.data as UserInfoType;
    Cookies.set('userId', UserinfoData.userId, { expires: 7 });
    successFunc();
  } catch (error) {
    console.error('Axios error:', error);
    if (errorFunc) {
      errorFunc();
    }
  }
}

export default apiSignIn;
