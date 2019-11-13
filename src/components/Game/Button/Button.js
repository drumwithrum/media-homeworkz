import React from 'react';
import './Button.css';

const Button = ({ onClick, className, content = '', ...props }) => (
  <button className={['buttonRoot', className].join(' ')} onClick={onClick} {...props}>
    {content}
  </button>
)

export default Button;
