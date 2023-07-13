import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/solid';
import React from 'react';
import { UserContext } from '../contexts/UserContext.jsx';
import Button from './Button';
import Login from './Login.jsx';

function Nav() {
  const { loggedIn, user, logout } = React.useContext(UserContext);
  const [loginOpen, setLoginOpen] = React.useState(false);
  return (
    <>
      <nav className="shadow bg-white flex justify-between gap-5 items-center text-gray-700 px-10 py-2">
        <img
          className="h-16"
          src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png"
          alt=""
        />

        <ul className="flex gap-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>Products</li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>Contact</li>
        </ul>

        <div className="flex justify-between rounded-full bg-gray-100 px-2 border-2 border-gray-100 focus-within:border-green-900 focus-within:px-6 transition-all duration-150">
          <input
            type="text"
            placeholder="Search Products..."
            className="p-2 bg-transparent focus:outline-none flex-1"
          />
          <SearchIcon className="w-4 " />
        </div>

        <div className="flex items-center gap-5">
          {loggedIn ? (
            <button className="flex gap-2 items-center group relative">
              {/* <UserIcon className="w-6 text-green-900" /> */}
              <img
                src={user.image}
                className="h-10 w-10 rounded-full bg-gray-100"
              />
              <span>Account</span>
              <div className="absolute  hidden top-full left-0 p-5 bg-white shadow rounded group-hover:flex flex-col gap-2 items-start">
                <p className="text-sm text-gray-500">{user.username}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <button
                  onClick={logout}
                  className="font-bold text-green-900 underline"
                >
                  Log Out
                </button>
              </div>
            </button>
          ) : (
            <Button onClick={() => setLoginOpen(true)}>Login</Button>
          )}

          <button className="flex gap-2 items-center">
            <span className="h-10 w-10 bg-gray-100  rounded-full flex items-center justify-center">
              <ShoppingCartIcon className="w-6 text-green-900" />
            </span>
            <span>Cart</span>
          </button>
        </div>
      </nav>
      {loginOpen && !loggedIn ? (
        <Login closeModal={() => setLoginOpen(false)} />
      ) : null}
    </>
  );
}

export default Nav;
