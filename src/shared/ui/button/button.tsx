import { ReactNode } from 'react';
import styles from "./styles.module.scss";

interface IButton{
    imgSrc?: string,
    children?: ReactNode,
    tabIndex?: number,
    onClick?: () => void,
    onMouseEnter?: () => void,
    onMouseLeave?: () => void,
}

export const Button = ({ imgSrc, children, ...restProps }: IButton) => {
    
    return (
        <button className={styles.button} {...restProps}>
            {imgSrc && <img className={styles.img} src={imgSrc} alt="img" />}
            {children && <span className={styles.text}>{children}</span>}
        </button>
    );
}