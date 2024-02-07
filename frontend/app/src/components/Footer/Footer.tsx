import { useState } from 'react';
import { FooterBgS, FooterIconS } from './FooterStyle';

function Footer({ setNowMenu }: { setNowMenu: (clickMenu: string) => void }) {
  const [selectMenu, setSelectMenu] = useState<string>('Community');

  const handleClickMenu = (clickMenu: string) => {
    setNowMenu(clickMenu);
    setSelectMenu(clickMenu);
  };
  return (
    <div>
      <FooterBgS>
        <FooterIconS
          onClick={() => handleClickMenu('Community')}
          $footerIconType={`${selectMenu === 'Community' ? '_click' : ''}_community`}
        />
        <FooterIconS
          onClick={() => handleClickMenu('Datetime')}
          $footerIconType={`${selectMenu === 'Datetime' ? '_click' : ''}_datetime`}
        />
        <FooterIconS
          onClick={() => handleClickMenu('Gymnastics')}
          $footerIconType={`${selectMenu === 'Gymnastics' ? '_click' : ''}_gymnastics`}
        />
        <FooterIconS
          onClick={() => handleClickMenu('My')}
          $footerIconType={`${selectMenu === 'My' ? '_click' : ''}_my`}
        />
      </FooterBgS>
    </div>
  );
}

export default Footer;
