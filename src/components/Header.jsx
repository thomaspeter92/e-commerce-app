import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-10">
      <div className="flex bg-green-900 p-2 px-10 text-white  justify-between text-center">
        <p className="flex gap-2 items-center">
          <PhoneIcon className="h-4" />
          +01012345678
        </p>
        <h5 className="hidden sm:block">Get 60% Off on Selected Items!</h5>
        <p className="flex gap-4 items-center">
          <span className="flex gap-1 items-center">
            Eng
            <ChevronDownIcon className="h-4" />
          </span>

          <span className="flex gap-1 items-center">
            Location
            <ChevronDownIcon className="h-4" />
          </span>
        </p>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
