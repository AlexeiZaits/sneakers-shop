import { ReactNode } from "react";
import styles from "./styles.module.scss"

interface IMOdal{
    onClick?: () => void
    children: ReactNode,
}

export function Modal({children, ...restProps}: IMOdal){
    return <div className={styles.modal}>
        <div {...restProps} className={styles.content}>
            {children}
        </div>
    </div>
}

