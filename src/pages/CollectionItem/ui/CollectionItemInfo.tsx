import { AddToCart } from "@/features/addToCart"
import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"

export function CollectionItemInfo(){
    const {data} = useSelector((state: RootState) => state.collectionItem)
    
    return <div className="collection-info">
            <span className="collection-company">SNEAKAERS COMPANY</span>
            <span className="collection-name">{data.name}</span>
            <span className="collection-descp">{data.description}</span>
            {data.discount? <div className="collection-price">
                <span className="collection-value">${Math.floor(data.price/100 * (100 - data.discount))}.00</span>
                <span className="collection-discount">{data.discount}%</span>
                <span className="collection-trough">${data.price}.00</span>
            </div>
            : <span className="collection-value">${data.price}</span>}
            <AddToCart/>
    </div>
}