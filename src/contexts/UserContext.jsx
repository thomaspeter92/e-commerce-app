import React, { createContext } from 'react';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [loggedIn, setLoggedin] = React.useState(false);
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState(false);

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

  const logout = () => {
    setLoggedin(false);
    setUser({});
  };

  return (
    <UserContext.Provider value={{ loggedIn, user, login, error, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
