import BgImgStyle from '../../components/BgImg/BgImgStyle';
import FlexBoxStyle from '../../components/FlexBox/FlexBoxStyle';
import InputBoxStyle from '../../components/InputBox/InputBoxStyle';
import LargeBtnStyle from '../../components/LargeBtn/LargeBtnStyle';
import { FindIdPwBtnS, LogoImgS, SignUpBtnS } from './SignInStyle';

function SignIn() {
  return (
    <div>
      <BgImgStyle>
        <FlexBoxStyle>
          <LogoImgS />
          <InputBoxStyle
            placeholder="아이디를 입력하세요."
            style={{ marginTop: '70px' }}
          />
          <InputBoxStyle
            placeholder="비밀번호를 입력하세요."
            style={{ marginTop: '20px' }}
          />
          <LargeBtnStyle style={{ marginTop: '20px' }}>로그인</LargeBtnStyle>
          <FindIdPwBtnS to="/find-id-pw">아이디/비밀번호 찾기</FindIdPwBtnS>
        </FlexBoxStyle>
        <SignUpBtnS to="/sign-up/name-id">처음이신가요?</SignUpBtnS>
      </BgImgStyle>
    </div>
  );
}

export default SignIn;
