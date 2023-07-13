import { XIcon } from '@heroicons/react/solid';
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Button from './Button';

function Login({ closeModal }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login, error } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="rounded p-5 bg-white min-w-[300px] relative">
        <button className="absolute top-2 right-2" onClick={closeModal}>
          <XIcon className="w-5 text-green-900" />
        </button>
        <h2 className="text-center text-lg font-bold text-green-900">
          Login to Shopify
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="Username"
            className="p-2 bg-transparent focus:outline-none border-2 border-gray-200 focus:border-green-900"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="p-2 bg-transparent focus:outline-none border-2 border-gray-200 focus:border-green-900"
          />
          {error ? (
            <p className="text-red-500 text-sm">Wrong username or password</p>
          ) : null}
          <Button className="bg-green-900 text-white py-2 rounded-full font-bold">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
