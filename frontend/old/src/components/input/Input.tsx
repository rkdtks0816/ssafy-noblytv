import { InputHTMLAttributes } from 'react';
import StyledInput from './styles/inputStyle';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ type, placeholder }: InputProps) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

export default Input;
