import React from 'react';
import './Button.css';

const Button = ({ onClick, content = '', ...props }) => (
  <button className="buttonRoot" onClick={onClick} {...props}>
    {content}
  </button>
)

export default Button;
