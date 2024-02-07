import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import QrCode from '../../components/Qrcode/Qrcode';
import { PATH_MAIN } from '../../constants/constants';

function SeniorUniqueCode() {
  const oldUserId: string = Cookies.get('oldUserId') || '';
  const navigate = useNavigate();
  const [uniqueCode, setUniqueCode] = useState<string>('');

  useEffect(() => {
    setUniqueCode(oldUserId);
  }, [oldUserId]);

  const handleSubmit = () => {
    navigate(PATH_MAIN);
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <MenuTitleStyle>어르신 고유 코드</MenuTitleStyle>
        </FlexBoxStyle>
        <QrCode uniqueCode={uniqueCode} />
        <FlexBoxStyle>
          <LargeBtnStyle
            style={{ marginBottom: '10vh' }}
            onClick={handleSubmit}
          >
            확인
          </LargeBtnStyle>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default SeniorUniqueCode;
