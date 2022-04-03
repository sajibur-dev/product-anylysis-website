import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Module/Header.module.css';


const Header = () => {
    return (
        <div className={styles.nav}>
            <NavLink className={styles.navlink}  to='/home'>Home</NavLink>
            <NavLink className={styles.navlink} to="/review">review</NavLink>
            <NavLink className={styles.navlink} to="/dashboard">dashboard</NavLink>
            <NavLink className={styles.navlink} to="/blogs">blogs</NavLink>
            <NavLink className={styles.navlink} to="/about">about</NavLink>
        </div>
    );
};

export default Header;