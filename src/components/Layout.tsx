import React from 'react';
import Navbar from './Navbar';
import WebHeader from './WebHeader';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <WebHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
