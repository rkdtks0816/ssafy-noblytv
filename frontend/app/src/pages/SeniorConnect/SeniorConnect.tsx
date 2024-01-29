import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';
import AddSeniorS from './SeniorConnectStyle';
import { UserInfoT } from '../sign_up/SignUpType';
import userInfoInit from '../sign_up/SignUpConstants';

function SeniorConnect() {
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState<UserInfoT>(userInfoInit);

  useEffect(() => {
    if (location.state && typeof location.state === 'object') {
      setUserInfo(location.state as UserInfoT);
    } else {
      setUserInfo(userInfoInit);
    }
  }, [location.state]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      oldUserId: [...userInfo.oldUserId, event.target.value],
    });
  };

  const handleBackBtn = () => {
    navigate('/community');
  };

  const handleSubmit = () => {
    navigate('/community');
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>어르신 연결</MenuTitleStyle>
          <InputBoxStyle
            placeholder="어르신 고유코드를 입력하세요."
            style={{ marginTop: '70px' }}
            onChange={handleInputChange}
          />
          <StatusMsg
            statusMsgType="error"
            statusMsgContents="일치하는 고유코드가 없습니다."
          />
        </FlexBoxStyle>
        <FlexBoxStyle>
          <LargeBtnStyle
            style={{ marginBottom: '20px' }}
            onClick={handleSubmit}
          >
            완료
          </LargeBtnStyle>
          <AddSeniorS to="/senior-sign-up/name-gender">
            어르신을 등록하고 싶어요!
          </AddSeniorS>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default SeniorConnect;
