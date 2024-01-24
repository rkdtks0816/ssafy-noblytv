import LargeBtn from '../../../components/app/large_btn';
import InputBoxS from '../../../components/app/styles/input_box_style';
import BgImgS from '../../../components/app/styles/bg_img_style';
import MenuTitleS from '../../../components/app/styles/menu_title_style';
import BackBtnS from '../../../components/app/styles/back_btn_style';
import FlexBoxS from '../../../components/app/styles/flex_box_style';
import FalseMsg from '../../../components/app/false_message';
import TrueMsg from '../../../components/app/true_message';

function PW() {
  return (
    <div>
      <BgImgS>
        <FlexBoxS>
          <BackBtnS to='/app/sign-up/name-id' />
          <MenuTitleS>회원가입</MenuTitleS>
          <InputBoxS placeholder="비밀번호를 입력하세요." style={{marginTop: '70px'}} />
          <TrueMsg trueMsgContents='사용가능한 비밀번호입니다.'></TrueMsg>
          <InputBoxS placeholder="다시 한번 입력하세요." style={{marginTop: '20px'}} />
          <FalseMsg falseMsgContents='비밀번호가 다릅니다.'></FalseMsg>
        </FlexBoxS>
        <LargeBtn pageUrl='/app/sign-up/birthday' largeBtnContents='다음' style={{marginBottom: '10vh'}}></LargeBtn>
      </BgImgS>
    </div>
  );
};

export default PW;
