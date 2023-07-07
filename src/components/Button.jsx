import React from 'react';

function Button({ children, onClick }) {
  return (
    <button className="py-3 px-5 rounded-full text-xs bg-green-900 font-bold text-white capitalize">
      {children}
    </button>
  );
}

export default Button;
