import { contactList } from "../lib/contact-list";
import styles from "./styles.module.scss";

export function ContactInfo(){
    return <div className={styles.info}>
        <span className={styles.title}>Our contact data</span>
        <div className={styles.social}>
            {/* TODO: сделать через for, придумать более лучшее оформление*/}
            <a href={contactList.geoLoc} target="_blank" rel="noopener noreferrer">
                <span className={styles.link}>We are located at Perm, Krisanova, 12a</span>
            </a>
            <a href={"tel:"+contactList.number}>
                <span className={styles.link}>Call the number {contactList.number}</span>
            </a>
            <a href={contactList.vk} target="_blank" rel="noopener noreferrer">
                <span className={styles.link}>Our social network VK</span>
            </a>
            <a href={contactList.telegram} target="_blank" rel="noopener noreferrer">
                <span className={styles.link}>Our social network Telegram</span>
            </a>
        </div>
    </div>
}