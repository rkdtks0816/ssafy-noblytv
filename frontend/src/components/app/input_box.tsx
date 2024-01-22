import React, { CSSProperties } from 'react';
import { InputBoxS } from './styles/input_box_style.tsx';


interface InputBoxProps {
  placeholder: string;
  style?: CSSProperties; 
}

const InputBox: React.FC<InputBoxProps> = ({ placeholder, style }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto', ...style}}>
      <InputBoxS placeholder={placeholder} />
    </div>
  );
};

export default InputBox;
