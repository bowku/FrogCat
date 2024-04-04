import React from 'react';

import "./Header.css";
import twitter from "../images/twitter.webp";
import telegram from "../images/telegram.webp";
import dextools from "../images/dextools.webp";

function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <a href="#frogcat" className="nav-link">Frog Cat</a>
        <a href="#buy" className="nav-link">Buy</a>
        <a href="#chart" className="nav-link">Chart</a>
        <div className="icons">
          <a href="#icon1"><img src={twitter} alt="Icon 1" /></a>
          <a href="#icon2"><img src={telegram} alt="Icon 2" /></a>
          <a href="#icon3"><img src={dextools} alt="Icon 3" /></a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
