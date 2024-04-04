import React from 'react';
import twitter from "../images/twitter.webp";
import telegram from "../images/telegram.webp";
import dextools from "../images/dextools.webp";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="icon-container">
        <a href="https://twitter.com"><img src={twitter} alt="Twitter" /></a>
        <a href="https://telegram.org"><img src={telegram} alt="Telegram" /></a>
        <a href="https://dextools.io"><img src={dextools} alt="DexTools" /></a>
      </div>
    </footer>
  );
}

export default Footer;
