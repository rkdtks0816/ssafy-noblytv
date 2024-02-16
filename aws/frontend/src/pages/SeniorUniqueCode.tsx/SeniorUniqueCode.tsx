import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import QrCode from '../../components/Qrcode/Qrcode';
import useOldUserStore from '../../store/useOldUserStore';
import { PATH_SIGN_IN } from '../../constants/constants';
import useUserStore from '../../store/useUserStore';
import useRedirectStore from '../../store/useRedirectStore';

function SeniorUniqueCode() {
  const navigate = useNavigate();
  const { accessToken } = useUserStore();
  const { oldUserId } = useOldUserStore();
  const { redirectPath } = useRedirectStore();

  useEffect(() => {
    if (!accessToken) {
      navigate(PATH_SIGN_IN);
    }
  }, [accessToken, navigate]);

  const handleSubmit = () => {
    navigate(redirectPath);
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <MenuTitleStyle>어르신 고유 코드</MenuTitleStyle>
        </FlexBoxStyle>
        <QrCode uniqueCode={oldUserId} />
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
