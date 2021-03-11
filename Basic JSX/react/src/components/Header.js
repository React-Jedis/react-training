import React from 'react';
import Logo from '../assets/BJ.png';

const Header = () => (
  <header
    style={{
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#a9221c'
    }}
  >
    <img src={Logo} height="80px" />
  </header>
);

export default Header;
