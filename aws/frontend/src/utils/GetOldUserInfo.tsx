import axios from 'axios';
import { BASE_URL, API_PORT, API_SENIOR } from '../constants/constants';
import { OldUserInfoType } from '../types/api_types';

interface GetUserInfoProps {
  grantType: string;
  accessToken: string;
  oldUserId: string;
  successFunc: (oldUserinfoData: OldUserInfoType) => void;
  errorFunc?: () => void;
}

function GetOldUserInfo({
  grantType,
  accessToken,
  oldUserId,
  successFunc,
  errorFunc,
}: GetUserInfoProps) {
  axios
    .get(`${BASE_URL}:${API_PORT}${API_SENIOR}/${oldUserId}`, {
      headers: {
        Authorization: `${grantType} ${accessToken}`,
      },
    })
    .then(response => {
      successFunc(response.data as OldUserInfoType);
    })
    .catch(error => {
      console.error('Axios error:', error);
      if (errorFunc) {
        errorFunc();
      }
    });
}

export default GetOldUserInfo;
