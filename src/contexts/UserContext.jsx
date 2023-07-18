import React, { createContext, useEffect } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedin] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState(false);
  const [cart, setCart] = React.useState([]);

  const login = async (username, password) => {
    try {
      let data = await fetch('public/data/users.json');
      data = await data.json();
      data.forEach((element) => {
        if (element.username === username && element.password === password) {
          setUser(element);
          setLoggedin(true);
          return;
        }
      });
      throw new Error('Invalid username or password');
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem('cart')) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  const logout = () => {
    setLoggedin(false);
    setUser({});
  };

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) return;
    setCart([...cart, product]);
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  return (
    <UserContext.Provider
      value={{ loggedIn, user, login, error, logout, addToCart, cart }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
