import axios from 'axios';
import Cookies from 'js-cookie';
import { BASE_URL, API_PORT, API_SENIOR } from '../constants/constants';
import { OldUserInfoType } from '../types/api_types';

interface GetUserInfoProps {
  successFunc: (oldUserinfoData: OldUserInfoType) => void;
  errorFunc?: () => void;
}

async function getOldUserInfo({ successFunc, errorFunc }: GetUserInfoProps) {
  const grantType = Cookies.get('grantType');
  const accessToken = Cookies.get('accessToken');
  const oldUserId = Cookies.get('oldUserId');
  try {
    const oldUserinfoResponse = await axios.get(
      `${BASE_URL}:${API_PORT}${API_SENIOR}/${oldUserId}`,
      {
        headers: {
          Authorization: `${grantType} ${accessToken}`,
        },
      },
    );
    const oldUserinfoData = oldUserinfoResponse.data as OldUserInfoType;
    successFunc(oldUserinfoData);
  } catch (error) {
    console.error('Axios error:', error);
    if (errorFunc) {
      errorFunc();
    }
  }
}

export default getOldUserInfo;
