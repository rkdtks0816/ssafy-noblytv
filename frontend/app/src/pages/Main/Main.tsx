import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import manageAuthToken from '../../utils/manageAuthToken';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { PATH_SIGN_IN } from '../../constants/constants';
import getOldUserInfo from '../../utils/getOldUserInfo';
import Community from '../../layout/Community/Community';
import Datetime from '../../layout/Datetime/Datetime';
import Gymnastics from '../../layout/Gymnastics/Gymnastics';
import My from '../../layout/My/My';
import MainBoxS from './MainStyle';
import { OldUserInfoType } from '../../types/api_types';
import { oldUserInfoInit } from '../../constants/type_init';

function Main() {
  const navigate = useNavigate();

  const [nowMenu, setNowMenu] = useState<string>('Community');
  const [oldUserInfo, setOldUserInfo] =
    useState<OldUserInfoType>(oldUserInfoInit);

  useEffect(() => {
    manageAuthToken({
      handleNavigate: () => navigate(PATH_SIGN_IN),
    });
  }, [navigate]);

  useEffect(() => {
    getOldUserInfo({
      successFunc: oldUserInfoData => {
        Cookies.set('oldUsername', oldUserInfoData.username, {
          expires: 7,
        });
        setOldUserInfo(oldUserInfoData);
      },
    }).catch(error => console.error('Axios error:', error));
  }, []);

  return (
    <div>
      <Header />
      <MainBoxS>
        {nowMenu === 'Community' && <Community />}
        {nowMenu === 'Datetime' && (
          <Datetime diaryContents={oldUserInfo.diaries} />
        )}
        {nowMenu === 'Gymnastics' && <Gymnastics />}
        {nowMenu === 'My' && <My />}
      </MainBoxS>
      <Footer setNowMenu={setNowMenu} />
    </div>
  );
}

export default Main;
