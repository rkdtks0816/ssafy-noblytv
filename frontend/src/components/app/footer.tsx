import React from 'react';
import { FooterBgS, FooterIconS } from './styles/footer_style';


const Footer: React.FC = () => {
  return (
    <div>
      <FooterBgS>
        <FooterIconS footerIconUrl='community_icon' footerHoverIconUrl='community_icon_hover' to='/community/main'></FooterIconS>
        <FooterIconS footerIconUrl='datetime_icon' footerHoverIconUrl='datetime_icon_hover' to='/datetime/main'></FooterIconS>
        <FooterIconS footerIconUrl='gymnastics_icon' footerHoverIconUrl='gymnastics_icon_hover' to='/gymnastics/main'></FooterIconS>
        <FooterIconS footerIconUrl='my_icon' footerHoverIconUrl='my_icon_hover' to='/my/main'></FooterIconS>
      </FooterBgS>
    </div>
  );
};

export default Footer;
