import axios from 'axios';
import { BASE_URL, API_PORT, API_FAMILY } from '../constants/constants';
import { UserInfoType } from '../types/api_types';

interface GetUserInfoProps {
  grantType: string;
  accessToken: string;
  userId: string;
  successFunc: (UserinfoData: UserInfoType) => void;
  errorFunc?: () => void;
}

function GetUserInfo({
  grantType,
  accessToken,
  userId,
  successFunc,
  errorFunc,
}: GetUserInfoProps) {
  axios
    .get(`${BASE_URL}:${API_PORT}${API_FAMILY}/${userId}`, {
      headers: { Authorization: `${grantType} ${accessToken}` },
    })
    .then(response => successFunc(response.data as UserInfoType))
    .catch(error => {
      console.error('Axios error:', error);
      if (errorFunc) {
        errorFunc();
      }
    });
}

export default GetUserInfo;
