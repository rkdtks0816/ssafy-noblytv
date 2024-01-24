import LargeBtn from '../../../components/large_btn';
import InputBoxS from '../../../components/styles/input_box_style';
import BgImgS from '../../../components/styles/BgImgS';
import MenuTitleS from '../../../components/styles/menu_title_style';
import BackBtnS from '../../../components/BackBtn/BackBtnStyle';
import FlexBoxS from '../../../components/styles/flex_box_style';
import ToggleBtn from '../../../components/toggle_btn';

function Birthday() {
  return (
    <div>
      <BgImgS>
        <FlexBoxS>
          <BackBtnS to="/app/sign-up/pw" />
          <MenuTitleS>회원가입</MenuTitleS>
          <ToggleBtn optionLeft="음력" optionRight="양력"></ToggleBtn>
          <InputBoxS type="date" style={{ marginTop: '20px' }} />
        </FlexBoxS>
        <LargeBtn
          pageUrl="/app/sign-up/senior-conect"
          largeBtnContents="다음"
          style={{ marginBottom: '10vh' }}
        ></LargeBtn>
      </BgImgS>
    </div>
  );
}

export default Birthday;
