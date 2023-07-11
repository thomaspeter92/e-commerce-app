import React from 'react';
import Header from '../components/Header';

function MainTemplate({ children }) {
  return (
    <>
      <Header />
      <main className="mt-32">{children}</main>
      <footer className="mt-24 bg-green-900 p-20"></footer>
    </>
  );
}

export default MainTemplate;
