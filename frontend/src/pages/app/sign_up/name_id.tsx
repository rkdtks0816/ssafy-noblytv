import LargeBtn from '../../../components/app/large_btn';
import InputBoxS from '../../../components/app/styles/input_box_style';
import BgImgS from '../../../components/app/styles/bg_img_style';
import MenuTitleS from '../../../components/app/styles/menu_title_style';
import BackBtnS from '../../../components/app/styles/back_btn_style';
import FlexBoxS from '../../../components/app/styles/flex_box_style';
import FalseMsg from '../../../components/app/false_message';
import TrueMsg from '../../../components/app/toggle_btn';

function NameId() {
  return (
    <div>
      <BgImgS>
        <FlexBoxS>
          <BackBtnS to="/app/sign-in" />
          <MenuTitleS>회원가입</MenuTitleS>
          <InputBoxS
            placeholder="이름을 입력하세요."
            style={{ marginTop: '70px' }}
          />
          <InputBoxS
            placeholder="아이디를 입력하세요."
            style={{ marginTop: '20px' }}
          />
          <FalseMsg falseMsgContents="아이디가 중복 됩니다." />
          <TrueMsg trueMsgContents='사용가능한 아이디입니다.'></TrueMsg>
        </FlexBoxS>
        <LargeBtn pageUrl='/app' largeBtnContents='다음' style={{marginBottom: '10vh'}}></LargeBtn>
      </BgImgS>
    </div>
  );
}

export default NameId;
