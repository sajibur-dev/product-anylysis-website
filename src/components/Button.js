import React from 'react';
import Styles from '../Module/Button.module.css';


const Button = ({children,handleEvent,...props}) => {
    return (
        <button onClick={handleEvent} className={Styles.button}>
            {children}
        </button>
    );
};

export default Button;