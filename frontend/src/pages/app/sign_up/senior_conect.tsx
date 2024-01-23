import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LargeBtn from '../../../components/app/large_btn';
import InputBoxS from '../../../components/app/styles/input_box_style';
import BgImgS from '../../../components/app/styles/bg_img_style';
import MenuTitleS from '../../../components/app/styles/menu_title_style';
import BackBtnS from '../../../components/app/styles/back_btn_style';
import FlexBoxS from '../../../components/app/styles/flex_box_style';
import FalseMsg from '../../../components/app/false_message';
// import TrueMsg from '../../../components/app/true_message';

const AddSeniorS = styled(Link)`
  margin: 0 auto 10vh auto;
  width: 300px;

  text-align: center;
  color: #666666;
  font-size: 21px;
  font-weight: 900;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

function SeniorConect() {
  return (
    <div>
      <BgImgS>
        <FlexBoxS>
          <BackBtnS to='/app/sign-up/pw' />
          <MenuTitleS>어르신 연결</MenuTitleS>
          <InputBoxS placeholder='어르신 고유코드를 입력하세요.' style={{marginTop: '70px'}} />
          <FalseMsg falseMsgContents='없는 고유코드입니다.'></FalseMsg>
        </FlexBoxS>
        <FlexBoxS>
          <LargeBtn pageUrl='/app/community' largeBtnContents='완료' style={{marginBottom: '20px'}}></LargeBtn>
          <AddSeniorS to="/app/senior-info">어르신을 등록하고 싶어요!</AddSeniorS>
        </FlexBoxS>
      </BgImgS>
    </div>
  );
};

export default SeniorConect;
