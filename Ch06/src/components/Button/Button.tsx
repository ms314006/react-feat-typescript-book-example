import React from 'react';

type ButtonProps = {
  text: string; 
  size: 'small' | 'large';
};
 
const defaultProps: ButtonProps = {
  text: '預設按鈕文字',
  size: 'small',
};

const Button = (props: ButtonProps) => {
  return (
    <button type="button">{props.text}</button>
  )
}; 

Button.defaultProps = defaultProps;
 
export default Button;
