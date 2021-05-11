import React from 'react';
import styles from "./header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
        <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt=""></img>
      </header>
    );
};

export default Header;