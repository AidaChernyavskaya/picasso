import React, {FC, MouseEventHandler, PropsWithChildren} from 'react';
import styles from './Button.module.css';

interface ButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({children , onClick}) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
