import { useNavigate } from 'react-router-dom';
import { MyBoxS, MyCardS } from './MyStyle';
import {
  PATH_CONNECT_TV,
  PATH_SENIOR_CONNECT,
  PATH_SENIOR_UNIQUE_CODE,
  PATH_SIGN_IN,
} from '../../../constants/constants';
import useUserStore from '../../../store/useUserStore';
import useOldUserStore from '../../../store/useOldUserStore';
import useMenuStore from '../../../store/useMenuStore';

function My() {
  const navigate = useNavigate();
  const { setGrantType, setAccessToken, setRefreshToken, setUserId } =
    useUserStore();
  const { setOldUserId, setOldUsername } = useOldUserStore();
  const { setNowMenu } = useMenuStore();

  const showSeniorCode = () => {
    navigate(PATH_SENIOR_UNIQUE_CODE);
  };
  const addSenior = () => {
    navigate(PATH_SENIOR_CONNECT);
  };
  const connectTv = () => {
    navigate(PATH_CONNECT_TV);
  };
  const signOut = () => {
    setGrantType('');
    setAccessToken('');
    setRefreshToken('');
    setUserId('');
    setOldUserId('');
    setOldUsername('');
    setNowMenu('');
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
