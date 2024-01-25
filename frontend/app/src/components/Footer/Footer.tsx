import { FooterBgS, FooterIconS } from './FooterStyle';

function Footer() {
  return (
    <div>
      <FooterBgS>
        <FooterIconS footerIconType="community" to="/community" />
        <FooterIconS footerIconType="datetime" to="/datetime" />
        <FooterIconS footerIconType="gymnastics" to="/gymnastics" />
        <FooterIconS footerIconType="my" to="/my" />
      </FooterBgS>
    </div>
  );
}

export default Footer;
