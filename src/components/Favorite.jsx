import { HeartIcon } from '@heroicons/react/solid';
import React from 'react';

function Favorite({ onClick, favorite }) {
  return (
    <button
      onClick={onClick}
      className={`border ${
        favorite ? 'border-pink-600 text-pink-500' : 'border-black'
      } rounded-full p-2 hover:scale-110 transition-all duration-200`}
    >
      <HeartIcon className="w-4" />
    </button>
  );
}

export default Favorite;
