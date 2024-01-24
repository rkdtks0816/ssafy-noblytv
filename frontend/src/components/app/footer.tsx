import { FooterBgS, FooterIconS } from './styles/footer_style';

function Footer() {
  return (
    <div>
      <FooterBgS>
        <FooterIconS
          footerIconUrl="community_icon"
          footerHoverIconUrl="community_icon_hover"
          to="/community/main"
        />
        <FooterIconS
          footerIconUrl="datetime_icon"
          footerHoverIconUrl="datetime_icon_hover"
          to="/datetime/main"
        />
        <FooterIconS
          footerIconUrl="gymnastics_icon"
          footerHoverIconUrl="gymnastics_icon_hover"
          to="/gymnastics/main"
        />
        <FooterIconS
          footerIconUrl="my_icon"
          footerHoverIconUrl="my_icon_hover"
          to="/my/main"
        />
      </FooterBgS>
    </div>
  );
}

export default Footer;
