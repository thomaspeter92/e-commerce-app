import { SearchIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/solid';
import React from 'react';

function Nav() {
  return (
    <nav className="bg-white flex justify-between gap-5 items-center text-gray-700 px-10 py-2">
      <img
        className="h-16"
        src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png"
        alt=""
      />

      <ul className="flex gap-5">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="flex rounded-full bg-gray-100 px-2 focus-within:bg-green-100">
        <input
          type="text"
          placeholder="Search Products..."
          className="p-2 bg-transparent focus:outline-none"
        />
        <SearchIcon className="w-4 " />
      </div>

      <div className="flex items-center gap-5">
        <button className="flex gap-2">
          <UserIcon className="w-6 text-green-900" />
          <span>Account</span>
        </button>

        <button className="flex gap-2">
          <ShoppingCartIcon className="w-6 text-green-900" />
          <span>Cart</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;