import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL, API_PORT, API_FAMILY } from '../constants/constants';
import { UserInfoType } from '../types/api_types';

interface GetUserInfoProps {
  successFunc: (UserinfoData: UserInfoType) => void;
  errorFunc?: () => void;
}

async function getUserInfo({ successFunc, errorFunc }: GetUserInfoProps) {
  const grantType = Cookies.get('grantType');
  const accessToken = Cookies.get('accessToken');
  const userId = Cookies.get('userId');
  try {
    const response = await axios.get(
      `${BASE_URL}:${API_PORT}${API_FAMILY}/${userId}`,
      { headers: { Authorization: `${grantType} ${accessToken}` } },
    );
    const UserinfoData = response.data as UserInfoType;
    successFunc(UserinfoData);
  } catch (error) {
    console.error('Axios error:', error);
    if (errorFunc) {
      errorFunc();
    }
  }
}

export default getUserInfo;
