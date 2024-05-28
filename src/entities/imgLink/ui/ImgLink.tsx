import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export interface imgLinkProps {
    text: string,
    src: string,
    to: string,
}

export function ImgLink({text, src, to}:imgLinkProps){
    return <Link className={styles.link} to={to}>
        <img className={styles.img} src={src} alt="forMen"/>
        <span className={styles.text}>{text}</span>
    </Link>
}