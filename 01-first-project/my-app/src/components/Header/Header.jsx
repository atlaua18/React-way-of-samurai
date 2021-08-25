import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from "./header.module.css"

const Header = (props ) => {
    return (
        <header className={styles.header}>
        <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png" alt=""></img>

        <div className={styles.loginBlock}>
          {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={"/login"}>Login</NavLink>}
          
        </div>
      </header>
    );
};

export default Header;