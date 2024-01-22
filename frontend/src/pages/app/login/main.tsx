import React from 'react';
import styled from 'styled-components';
import InputBox from '../../../components/app/input_box';
import LargeBtn from '../../../components/app/large_btn';

const BgImgS= styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  background: url('../src/assets/bg_img.png');
  background-size: cover;
  background-repeat: no-repeat;

  z-index: -1;
`;

const LogoImg= styled.div`
  margin: 0 auto;
  width: 200px;
  height: 200px;

  background: url('../src/assets/logo.png');
  background-size: cover;
  background-repeat: no-repeat;
`;
const BgMain: React.FC = () => {
  return (
    <div>
      <BgImgS>
        <LogoImg />
        <InputBox placeholder="아이디를 입력하세요." style={{marginTop: '20px'}} />
        <InputBox placeholder="비밀번호를 입력하세요." style={{marginTop: '20px'}} />
        <LargeBtn largeBtnContents='로그인' ></LargeBtn>
      </BgImgS>
      
    </div>
  );
};

export default BgMain;
