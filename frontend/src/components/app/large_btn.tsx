import React, { CSSProperties } from 'react';
import { LargeBtnS } from './styles/large_btn_style';


interface LargeBtnProps {
  largeBtnContents: string;
  pageUrl: string;
  style?: CSSProperties; 
}

const LargeBtn: React.FC<LargeBtnProps> = ({ largeBtnContents, pageUrl, style }) => {
  return (
    <LargeBtnS to={pageUrl} style={style}>{largeBtnContents}</LargeBtnS>
  );
};

export default LargeBtn;
