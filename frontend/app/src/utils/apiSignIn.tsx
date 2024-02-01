import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL, API_PORT, API_FAMILY_SIGN_IN } from '../constants/api';
import { SignInType, SignInResType } from '../types/api_types';

interface ApiSignInProps {
  signInData: SignInType;
  successFunc: () => void;
  errorFunc: () => void;
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
    Cookies.set('authToken', data.accessToken, { expires: 7 });
    successFunc();
  } catch (error) {
    console.error('Axios error:', error);
    errorFunc();
  }
}

export default apiSignIn;
