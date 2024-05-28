import { IChildren } from "@/shared/lib/interfaces";
import styles from "./styles.module.scss";

export function Wrapper({children}: IChildren){
    return <div className={styles.main}>
        {children}
    </div>
}