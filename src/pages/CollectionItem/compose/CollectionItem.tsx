import { CollectionItemInfo } from "../ui/CollectionItemInfo"
import { Links } from "@/shared/index"
import { LightBox } from "@/widgets/index"
import { useLocation } from "react-router-dom"
import { ReactNode } from "react"
import { useSetCard } from "../hook/use-set-card"

interface ICollectionItem{
    children?: ReactNode
}

export function CollectionItem({children} : ICollectionItem){
    const location = useLocation()
    const card = useSetCard()
    
    return <div className="main">
        <Links pathname={location.pathname} name={card.data.name}/>
        <div className="collection">
            <LightBox/>
            <CollectionItemInfo/>
        </div>
        {children}
    </div>
}
