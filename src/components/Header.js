import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Module/Header.module.css';


const Header = () => {
    return (
        <div className={styles.nav}>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to="/review">review</NavLink>
            <NavLink to="/dasboard">dashboard</NavLink>
            <NavLink to="/blogs">blogs</NavLink>
            <NavLink to="/about">about</NavLink>
        </div>
    );
};

export default Header;