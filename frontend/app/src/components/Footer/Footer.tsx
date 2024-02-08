import { useState } from 'react';
import { FooterBgS, FooterIconS, FooterClickableAreaS } from './FooterStyle';

function Footer({ setNowMenu }: { setNowMenu: (clickMenu: string) => void }) {
  const [selectMenu, setSelectMenu] = useState<string>('Community');

  const handleClickMenu = (clickMenu: string) => {
    setNowMenu(clickMenu);
    setSelectMenu(clickMenu);
  };
  return (
    <div>
      <FooterBgS>
        <FooterClickableAreaS onClick={() => handleClickMenu('Community')}>
          <FooterIconS
            $footerIconType={`${selectMenu === 'Community' ? '_click' : ''}_community`}
          />
        </FooterClickableAreaS>
        <FooterClickableAreaS onClick={() => handleClickMenu('Datetime')}>
          <FooterIconS
            $footerIconType={`${selectMenu === 'Datetime' ? '_click' : ''}_datetime`}
          />
        </FooterClickableAreaS>
        <FooterClickableAreaS onClick={() => handleClickMenu('Gymnastics')}>
          <FooterIconS
            $footerIconType={`${selectMenu === 'Gymnastics' ? '_click' : ''}_gymnastics`}
          />
        </FooterClickableAreaS>
        <FooterClickableAreaS onClick={() => handleClickMenu('My')}>
          <FooterIconS
            $footerIconType={`${selectMenu === 'My' ? '_click' : ''}_my`}
          />
        </FooterClickableAreaS>
      </FooterBgS>
    </div>
  );
}

export default Footer;
