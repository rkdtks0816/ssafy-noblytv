import React from 'react';
import { HeaderBgS, SeniorNameS, SeniorTitleS, NoticeIconS } from './styles/header_style';


const Header: React.FC = () => {
  return (
    <div>
      <HeaderBgS>
        <SeniorNameS to="/select-senior">이세종</SeniorNameS>
        <SeniorTitleS>어르신</SeniorTitleS>
        <NoticeIconS to='/alarm'></NoticeIconS>
      </HeaderBgS>
    </div>
  );
};

export default Header;
