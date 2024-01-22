import React, { CSSProperties } from 'react';
import { LargeBtnS } from './styles/large_btn_style';


interface LargeBtnProps {
  largeBtnContents: string;
  style?: CSSProperties; 
}

const LargeBtn: React.FC<LargeBtnProps> = ({ largeBtnContents, style }) => {
  return (
    <LargeBtnS style={style}>{largeBtnContents}</LargeBtnS>
  );
};

export default LargeBtn;
