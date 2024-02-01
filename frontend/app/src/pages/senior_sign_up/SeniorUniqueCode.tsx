import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import QrCode from '../../components/Qrcode/Qrcode';
import { PATH_COMMUNITY } from '../../constants/api';

function SeniorUniqueCode() {
  const navigate = useNavigate();
  const location = useLocation();

  const [uniqueCode, setUniqueCode] = useState<string>('');

  // location.state가 유효한 객체일 경우 seniorInfo 상태를 업데이트하고, 그렇지 않으면 초기화
  useEffect(() => {
    if (location.state && typeof location.state === 'string') {
      setUniqueCode(location.state);
    } else {
      setUniqueCode('');
    }
  }, [location.state]);

  const handleSubmit = () => {
    navigate(PATH_COMMUNITY, { state: { uniqueCode } });
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
