import { useState } from 'react';
import MyMain from './layout/MyMain/MyMain';
import SettingTv from './layout/SettingTv/SettingTv';
import { PATH_MY_MAIN, PATH_SETTING_TV } from '../../../constants/constants';

function My() {
  const [myMenu, setMyMenu] = useState<string>('MyMain');
  return (
    <div>
      {myMenu === PATH_MY_MAIN && <MyMain setMyMenu={setMyMenu} />}
      {myMenu === PATH_SETTING_TV && <SettingTv setMyMenu={setMyMenu} />}
    </div>
  );
}

export default My;
