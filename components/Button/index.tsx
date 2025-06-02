import React, { FC } from 'react'
import { ButtonWrapper } from './Button.style';

interface ButtonProps {
  children?: React.ReactNode;
  label?: React.ReactNode | string;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <ButtonWrapper>
      {props.children}
    </ButtonWrapper>
  )
}

export default Button;