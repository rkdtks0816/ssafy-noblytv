// src/styles/ButtonStyles.ts
import styled, { css } from 'styled-components';

const btnStyleTypes = {
  cancel: css`
    background-color: #ff3838; // 아마란스(빨간색 핑크) 색상 계열.
    &:hover {
      background-color: #b30015;
    }
  `,
  confirm: css`
    background-color: #28a745; // 샤토 그린 색상 계열 계열
    &:hover {
      background-color: #1f7a38;
    }
  `,
  next: css`
    background-color: #eac164; //
    &:hover {
      background-color: #eab364;
    }
  `,
};

type ButtonProps = {
  buttontype: 'cancel' | 'confirm' | 'next';
};

const BtnStyles = styled.button<ButtonProps>`
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  // buttonType의 props에 따라 btnStyleTypes 객체에서 해당 스타일을 선택하고 적용.
  ${({ buttontype: buttonType }) => btnStyleTypes[buttonType]}
`;

export default BtnStyles;
