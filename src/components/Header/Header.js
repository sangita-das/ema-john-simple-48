import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h2>This is Header!</h2>
      <img className="logo" src={logo} alt="" />
      <nav>
        <a href="/shop">Shop</a>
        <a href="/orders">Order Review</a>
        <a href="/inventory">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
