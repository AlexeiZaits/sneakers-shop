import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss";

export function ErrorPage(){
    
    return <Wrapper>
        <div className={styles.container}>
            <span className={styles.text}>404 Not Found</span>
        </div>
    </Wrapper>
}