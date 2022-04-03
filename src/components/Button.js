import React from 'react';
import Styles from '../Module/Button.module.css';


const Button = ({children}) => {
    return (
        <button className={Styles.button}>
            {children}
        </button>
    );
};

export default Button;