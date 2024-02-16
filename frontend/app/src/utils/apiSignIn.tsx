import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import {
  BASE_URL,
  API_PORT,
  API_FAMILY_SIGN_IN,
  API_FAMILY,
  PATH_SENIOR_CONNECT,
  PATH_COMMUNITY,
  API_SENIOR,
} from '../constants/constants';
import { SignInType, SignInResType, UserInfoType } from '../types/api_types';

interface ApiSignInProps {
  signInData: SignInType;
  navigate: ReturnType<typeof useNavigate>;
  errorFunc?: () => void;
}

async function apiSignIn({ signInData, navigate, errorFunc }: ApiSignInProps) {
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
    const userinfoResponse = await axios.get(
      `${BASE_URL}:${API_PORT}${API_FAMILY}/${signInData.userId}`,
      { headers: { Authorization: `${data.grantType} ${data.accessToken}` } },
    );
    const UserinfoData = userinfoResponse.data as UserInfoType;
    Cookies.set('userId', UserinfoData.userId, { expires: 7 });
    const oldUserinfoResponse = await axios.get(
      `${BASE_URL}:${API_PORT}${API_SENIOR}/${UserinfoData.lastVisitedId}?userId=${UserinfoData.userId}`,
      { headers: { Authorization: `${data.grantType} ${data.accessToken}` } },
    );
    const oldUserinfoData = oldUserinfoResponse.data as {
      userId: string;
      username: string;
    };
    Cookies.set('oldUserId', oldUserinfoData.userId, { expires: 7 });
    Cookies.set('oldUsername', oldUserinfoData.username, { expires: 7 });
    if (UserinfoData.familyRelations.length === 0)
      navigate(PATH_SENIOR_CONNECT);
    else navigate(PATH_COMMUNITY);
  } catch (error) {
    console.error('Axios error:', error);
    if (errorFunc) {
      errorFunc();
    }
  }
}

export default apiSignIn;
