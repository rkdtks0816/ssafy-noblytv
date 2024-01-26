import LargeBtn from '../../../components/app/large_btn';
import InputBoxS from '../../../components/app/styles/input_box_style';
import BgImgS from '../../../components/app/styles/bg_img_style';
import MenuTitleS from '../../../components/app/styles/menu_title_style';
import BackBtnS from '../../../components/app/styles/back_btn_style';
import FlexBoxS from '../../../components/app/styles/flex_box_style';
import ToggleBtn from '../../../components/app/toggle_btn';

function Birthday() {
  return (
    <div>
      <BgImgS>
        <FlexBoxS>
          <BackBtnS to='/app/sign-up/pw' />
          <MenuTitleS>회원가입</MenuTitleS>
          <ToggleBtn optionLeft='음력' optionRight='양력'></ToggleBtn>
          <InputBoxS type="date" style={{marginTop: '20px'}} />
        </FlexBoxS>
        <LargeBtn pageUrl='/app/sign-up/senior-conect' largeBtnContents='다음' style={{marginBottom: '10vh'}}></LargeBtn>
      </BgImgS>
    </div>
  );
};

export default Birthday;
