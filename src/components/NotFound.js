import React from 'react';
import logo from '../assets/images/404.jpg';
import Styles from '../Module/NotFound.module.css';



const NotFound = () => {
    return (
        <div className={Styles.NotFound}>
            <img src={logo} width='400' alt="" />
        </div>
    );
};

export default NotFound;