import { LightBox } from "@/widgets/index"
import { AddToCart, CollectionItemInfo, Links } from "@/features/index"
import { IChildren } from "@/shared/lib/interfaces"
import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.scss";

export function CollectionItem({children} : IChildren){
    
    return <Wrapper>
        <Links/>
        <div className={styles.collection}>
            <LightBox/>
            <CollectionItemInfo>
                <AddToCart/>
            </CollectionItemInfo>
        </div>
        {children}
    </Wrapper>
}
