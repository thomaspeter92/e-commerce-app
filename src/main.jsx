import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import UserContextProvider from './contexts/UserContext.jsx';
import './index.css';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import MainTemplate from './templates/MainTemplate.jsx';

const BrowserRouter = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/about', element: <About /> },
  { path: '/product/:id', element: <Product /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <MainTemplate>
        <RouterProvider router={BrowserRouter} />
      </MainTemplate>
    </UserContextProvider>
  </React.StrictMode>
);
