import React, { FC } from 'react'
import { ButtonWrapper } from './Button.style';

interface ButtonProps {
  children?: React.ReactNode;
  label?: React.ReactNode | string;
  type?: React.ReactNode;
  disabled?: React.ReactNode
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <ButtonWrapper>
      {props.children}
    </ButtonWrapper>
  )
}

export default Button;