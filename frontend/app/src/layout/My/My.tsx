import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { MyBoxS, MyCardS } from './MyStyle';
import {
  PATH_CONNECT_TV,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_UNIQUE_CODE,
  PATH_SIGN_IN,
} from '../../constants/constants';

function My() {
  const navigate = useNavigate();
  const showSeniorCode = () => {
    navigate(PATH_SENIOR_UNIQUE_CODE, { state: 'My' });
  };
  const addSenior = () => {
    navigate(PATH_SENIOR_CONNECT, { state: 'My' });
  };
  const connectTv = () => {
    navigate(PATH_CONNECT_TV, { state: 'My' });
  };
  const signOut = () => {
    Cookies.remove('grantType');
    Cookies.remove('accessToken');
    Cookies.remove('refreshToken');
    Cookies.remove('oldUserId');
    Cookies.remove('oldUsername');
    Cookies.remove('userId');
    navigate(PATH_SIGN_IN);
  };
  return (
    <MyBoxS>
      <MyCardS onClick={showSeniorCode}>어르신 고유코드</MyCardS>
      <MyCardS onClick={addSenior}>어르신 추가 등록</MyCardS>
      <MyCardS onClick={connectTv}>어르신 TV 등록</MyCardS>
      <MyCardS onClick={signOut}>로그아웃</MyCardS>
    </MyBoxS>
  );
}

export default My;
