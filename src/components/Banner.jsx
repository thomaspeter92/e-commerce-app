import React from 'react';
import Button from './Button';

function Banner() {
  return (
    <div
      className="w-full h-72 -mt-3
      relative flex items-center px-5 sm:px-10
     bg-gradient-to-r from-white bg-opacity-50"
    >
      <div className="relative z-10 max-w-[50ch]">
        <h1 className="text-green-900 font-bold text-5xl mb-5">
          Up to 60% Off on Selected Products!
        </h1>
        <Button>See More</Button>
      </div>
      <img
        className="object-cover h-full w-full absolute top-0 left-0 -z-10"
        src="https://source.unsplash.com/u79wy47kvVs"
        alt=""
      />
    </div>
  );
}

export default Banner;
