import axios from 'axios';
import { BASE_URL, API_PORT, API_FAMILY_SIGN_IN } from '../constants/constants';
import { SignInType, SignInResType } from '../types/api_types';

function PostSignIn({
  signInData,
  successFunc,
  errorFunc,
}: {
  signInData: SignInType;
  successFunc: (response: { data: SignInResType }) => void;
  errorFunc?: () => void;
}) {
  axios
    .post(`${BASE_URL}:${API_PORT}${API_FAMILY_SIGN_IN}`, signInData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response: { data: SignInResType }) => {
      successFunc(response);
    })
    .catch(() => {
      if (errorFunc) {
        errorFunc();
      }
    });
}

export default PostSignIn;
