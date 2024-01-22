// src/styles/ButtonStyles.ts
import styled, { css } from 'styled-components';

const btnStyles = {
  cancel: css`
    background-color: #dc3545; // 붉은색 계열
    &:hover {
      background-color: #c82333;
    }
  `,
  confirm: css`
    background-color: #28a745; // 초록색 계열
    &:hover {
      background-color: #218838;
    }
  `,
  next: css`
    background-color: #007bff; // 파란색 계열
    &:hover {
      background-color: #0056b3;
    }
  `,
};

type ButtonProps = {
  buttonType: 'cancel' | 'confirm' | 'next';
};

const StyledButton = styled.button<ButtonProps>`
  margin: 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;

  ${({ buttonType }) => btnStyles[buttonType]}
`;

export default StyledButton;
