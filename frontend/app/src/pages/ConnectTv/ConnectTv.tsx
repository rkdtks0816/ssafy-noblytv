import { useNavigate } from 'react-router-dom';
import BackBtnStyle from '../../components/BackBtn/BackBtnStyle';
import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import MenuTitleStyle from '../../components/MenuTitle/MenuTitleStyle';
import StatusMsg from '../../components/StatusMsg/StatusMsg';

function ConnectTv() {
  const navigate = useNavigate();

  const handleBackBtn = () => {
    navigate('/cummunity');
  };

  const handleSubmit = () => {
    navigate('/select-senior');
  };

  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <BackBtnStyle onClick={handleBackBtn} />
          <MenuTitleStyle>TV 연결</MenuTitleStyle>
          <InputBoxStyle
            placeholder="TV 고유코드를 입력하세요."
            style={{ marginTop: '70px' }}
          />
          <StatusMsg
            statusMsgType="error"
            statusMsgContents="TV고유코드가 일치하지 않습니다."
          />
        </FlexBoxStyle>
        <FlexBoxStyle>
          <LargeBtnStyle
            style={{ marginBottom: '10vh' }}
            onClick={handleSubmit}
          >
            다음
          </LargeBtnStyle>
        </FlexBoxStyle>
      </BgImgStyle>
    </div>
  );
}

export default ConnectTv;
