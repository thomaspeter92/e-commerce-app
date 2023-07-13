import React from 'react';

function Button({ children, onClick, variant }) {
  return (
    <button
      onClick={onClick}
      className={`py-4 px-5 rounded-full text-xs font-bold capitalize border-2 border-green-900 ${
        variant === 'secondary' ? ' text-green-900' : 'text-white bg-green-900'
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
