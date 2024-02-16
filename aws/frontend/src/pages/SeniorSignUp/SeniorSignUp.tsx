import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SeniorNameGender from '../../layout/senior_sign_up/SeniorNameGender';
import SeniorBirth from '../../layout/senior_sign_up/SeniorBirth';
import {
  PATH_SENIOR_SIGN_UP_BIRTH,
  PATH_SENIOR_SIGN_UP_NAME_GENDER,
  PATH_SIGN_IN,
} from '../../constants/constants';
import useUserStore from '../../store/useUserStore';

function SeniorSignUp() {
  const navigate = useNavigate();
  const { accessToken } = useUserStore();
  const [nowSeniorSignUp, setNowSeniorSignUp] = useState<string>(
    PATH_SENIOR_SIGN_UP_NAME_GENDER,
  );

  useEffect(() => {
    if (!accessToken) {
      navigate(PATH_SIGN_IN);
    }
  }, [accessToken, navigate]);

  return (
    <div>
      {nowSeniorSignUp === PATH_SENIOR_SIGN_UP_NAME_GENDER && (
        <SeniorNameGender setNowSeniorSignUp={setNowSeniorSignUp} />
      )}
      {nowSeniorSignUp === PATH_SENIOR_SIGN_UP_BIRTH && (
        <SeniorBirth setNowSeniorSignUp={setNowSeniorSignUp} />
      )}
    </div>
  );
}

export default SeniorSignUp;
