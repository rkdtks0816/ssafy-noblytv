import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LargeBtn from '../../../components/app/large_btn';
import InputBoxS from '../../../components/app/styles/input_box_style';
import BgImgS from '../../../components/app/styles/bg_img_style';
import FlexBoxS from '../../../components/app/styles/flex_box_style';

const LogoImgS = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;

  background: url('/src/assets/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

const FindIdPwS = styled(Link)`
  margin: 10px auto 0 auto;
  width: 300px;

  text-align: right;
  color: #888888;
  font-size: 15px;
  font-weight: 600;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

const SignUpS = styled(Link)`
  margin: 0 auto 10vh auto;
  width: 300px;

  text-align: center;
  color: #666666;
  font-size: 21px;
  font-weight: 900;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-decoration: none;
`;

function SignIn() {
  // // 로그인 하기
  // // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const handleLoginClick = () => {
  //   // 로그인 로직 작성하고 로그인 버튼 클릭(onClick)시 해당 로직 실행 구현 필요.
  //   // eslint-disable-next-line no-console
  //   console.log('로그인');
  // };

  return (
    <div>
      <BgImgS>
        <FlexBoxS>
          <LogoImgS />
          <InputBoxS
            placeholder="아이디를 입력하세요."
            style={{ marginTop: '70px' }}
          />
          <InputBoxS
            placeholder="비밀번호를 입력하세요."
            style={{ marginTop: '20px' }}
          />
          <LargeBtn
            pageUrl="/app/community"
            largeBtnContents="로그인"
            style={{ marginTop: '20px' }}
          />
          <FindIdPwS to="/app/find-id-pw">아이디/비밀번호 찾기</FindIdPwS>
        </FlexBoxS>
        <SignUpS to="/app/sign-up/name-id">처음이신가요?</SignUpS>
      </BgImgS>
    </div>
  );
}

export default SignIn;
