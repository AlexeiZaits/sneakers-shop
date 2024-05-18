import { ICartCard } from "@/features/basketList/lib/interfaces";
import { IconDelete } from "src/app/images/icon-delete";

export function BasketItem({amount,id,image,name,discountPrice,finalyPrice, handleClick}:Pick<ICartCard,"amount"| "id"| "image" | "name" | "discountPrice" | "finalyPrice" | "handleClick">){
    
    return <div className="cart-item">
        <div className="cart-item_container"><img className="cart-item_img" src={image} alt="" /></div>
        <div className="cart-item_info">
            <span>{name}</span>
            <span className="cart-item_price">${discountPrice} x {amount} <span className="cart-item_fullprice">${finalyPrice}</span></span>
        </div>
        <div onClick={() => handleClick(id)} className="cart-item_delete"><IconDelete className="cart-item_svg"/></div>
    </div>
}