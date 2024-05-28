import { CardList, Links } from "@/features/index"
import { Wrapper } from "@/shared/ui"
import { Filter, Sort } from "@/widgets/index"
import styles from "./styles.module.scss";

export function MainLayout(){
    
    return <Wrapper>
        <Links/>
        <div className={styles.container}>
            <Filter/>
            <Sort/>
        </div>
        <CardList/>
    </Wrapper>
}
