import { useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import QrCode from '../../components/Qrcode/Qrcode';

function SeniorUniqueCode() {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate('/sign-up/birthday');
  };

  const handleSubmit = () => {
    navigate('/cummunity');
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>어르신 고유 코드</MenuTitleStyle>
        </FlexBoxStyle>
        <QrCode />
        <div>어르신 고유 코드</div>
        <FlexBoxStyle>
          <LargeBtnStyle
            style={{ marginBottom: '20px' }}
            onClick={handleSubmit}
          >
            완료
          </LargeBtnStyle>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default SeniorUniqueCode;
