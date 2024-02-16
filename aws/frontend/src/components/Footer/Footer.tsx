import useMenuStore from '../../store/useMenuStore';
import { FooterBgS, FooterIconS, FooterClickableAreaS } from './FooterStyle';

function Footer() {
  const { nowMenu, setNowMenu } = useMenuStore();
  const handleClickMenu = (selectMenu: string) => {
    setNowMenu(selectMenu);
  };

  return (
    <FooterBgS>
      <FooterClickableAreaS onClick={() => handleClickMenu('Community')}>
        <FooterIconS
          $footerIconType={`${nowMenu === 'Community' ? '_click' : ''}_community`}
        />
      </FooterClickableAreaS>
      <FooterClickableAreaS onClick={() => handleClickMenu('Datetime')}>
        <FooterIconS
          $footerIconType={`${nowMenu === 'Datetime' ? '_click' : ''}_datetime`}
        />
      </FooterClickableAreaS>
      <FooterClickableAreaS onClick={() => handleClickMenu('Gymnastics')}>
        <FooterIconS
          $footerIconType={`${nowMenu === 'Gymnastics' ? '_click' : ''}_gymnastics`}
        />
      </FooterClickableAreaS>
      <FooterClickableAreaS onClick={() => handleClickMenu('My')}>
        <FooterIconS
          $footerIconType={`${nowMenu === 'My' ? '_click' : ''}_my`}
        />
      </FooterClickableAreaS>
    </FooterBgS>
  );
}

export default Footer;
