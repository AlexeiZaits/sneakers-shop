import { ICard } from "@/features/cardList/lib/interfaces"
import { LightBox } from "@/features/ligthBox"
import { useDispatch, useSelector } from "react-redux"
import { useLoaderData, useLocation } from "react-router-dom"
import { setCard } from "../model/collection-item-slice"
import { useEffect } from "react"
import { RootState } from "@/store.ts"
import { CollectionItemInfo } from "../ui/CollectionItemInfo"
import { Links } from "@/shared/index"
import { resetAmount } from "@/features/addToCart/model/calc-amount-lsice"



export function CollectionItem(){
    const location = useLocation()
    const dispatch = useDispatch()
    const collectionItem = useSelector((state: RootState) => state.collectionItem)
    const { card } = useLoaderData() as { card: {data: ICard, imgs: string[]} }

    useEffect(()=> {
        dispatch(setCard(card))
        dispatch(resetAmount(null))
    }, [collectionItem,card, dispatch])
    
    console.log(card)
    return <div className="main">
        <Links pathname={location.pathname} name={card.data.name}/>
        <div className="collection">
            <LightBox/>
            <CollectionItemInfo/>
        </div>
    </div>
}
