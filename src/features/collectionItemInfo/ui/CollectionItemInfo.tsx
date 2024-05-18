import { IChildren } from "@/shared/lib/interfaces"
import { useGetCard } from "../hook/use-get-card"
import { useAppSelector } from "@/shared/hooks/storeHooks"
import { getDiscountPrice } from "../lib/getDiscountPrice"

export function CollectionItemInfo({children}: IChildren){
    const {data} = useAppSelector(state => state.collectionItem)
    useGetCard()
    
    return <div className="collection-info">
            <span className="collection-company">SNEAKAERS COMPANY</span>
            <span className="collection-name">{data.name}</span>
            <span className="collection-descp">{data.description}</span>
            {data.discount? <div className="collection-price">
                <span className="collection-value">${getDiscountPrice(data.price, data.discount)}.00</span>
                <span className="collection-discount">{data.discount}%</span>
                <span className="collection-trough">${data.price}.00</span>
            </div>
            : <span className="collection-value">${data.price}</span>}
            {children}
    </div>
}