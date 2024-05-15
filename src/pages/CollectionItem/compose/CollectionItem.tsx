import { CollectionItemInfo } from "../ui/CollectionItemInfo"
import { LightBox } from "@/widgets/index"
import { ReactNode } from "react"
import { useSetCard } from "../hook/use-set-card"
import { Links } from "@/features/links"

interface ICollectionItem{
    children?: ReactNode
}

export function CollectionItem({children} : ICollectionItem){
    useSetCard()
    //TODO: model перенести в feat
    return <div className="main">
        <Links/>
        <div className="collection">
            <LightBox/>
            <CollectionItemInfo/>
        </div>
        {children}
    </div>
}
