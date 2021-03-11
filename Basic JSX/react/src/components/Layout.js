import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const Layout = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Layout;
