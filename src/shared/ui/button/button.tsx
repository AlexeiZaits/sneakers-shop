import { ReactNode } from 'react';
import styles from "./styles.module.scss";

interface IButton{
    imgSrc?: string,
    children?: ReactNode,
    tabIndex?: number,
    onClick?: () => void,
    onMouseEnter?: () => void,
}

export const Button = ({ imgSrc, children, ...restProps }: IButton) => {
    
    return (
        <button className={styles.button} {...restProps}>
            {imgSrc && <img className={styles.button+"-img"} src={imgSrc} alt="img" />}
            {children && <span className={styles.button+"-text"}>{children}</span>}
        </button>
    );
}