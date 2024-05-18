import { LightBox } from "@/widgets/index"
import { AddToCart, CollectionItemInfo, Links } from "@/features/index"
import { IChildren } from "@/shared/lib/interfaces"

export function CollectionItem({children} : IChildren){
    
    return <div className="main">
        <Links/>
        <div className="collection">
            <LightBox/>
            <CollectionItemInfo>
                <AddToCart/>
            </CollectionItemInfo>
        </div>
        {children}
    </div>
}
