import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NameId from '../../layout/sign_up/NameId';
import Password from '../../layout/sign_up/Password';
import Birth from '../../layout/sign_up/Birth';
import {
  PATH_SIGN_UP_BIRTH,
  PATH_SIGN_UP_NAME_ID,
  PATH_SIGN_UP_PASSWORD,
} from '../../constants/constants';
import useUserStore from '../../store/useUserStore';
import useRedirectStore from '../../store/useRedirectStore';

function SignUp() {
  const navigate = useNavigate();
  const { accessToken } = useUserStore();
  const { redirectPath } = useRedirectStore();
  const [nowSignUp, setNowSignUp] = useState<string>(PATH_SIGN_UP_NAME_ID);

  useEffect(() => {
    if (accessToken) {
      navigate(redirectPath);
    }
  }, [accessToken, navigate, redirectPath]);

  return (
    <div>
      {nowSignUp === PATH_SIGN_UP_NAME_ID && (
        <NameId setNowSignUp={setNowSignUp} />
      )}
      {nowSignUp === PATH_SIGN_UP_PASSWORD && (
        <Password setNowSignUp={setNowSignUp} />
      )}
      {nowSignUp === PATH_SIGN_UP_BIRTH && (
        <Birth setNowSignUp={setNowSignUp} />
      )}
    </div>
  );
}

export default SignUp;
