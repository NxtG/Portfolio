import React from 'react';

const Button = ({ onClick, style, title }) => {
  return (
    <button
      style={style}
      className=""
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
