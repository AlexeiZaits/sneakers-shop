
import { ICartCard, removeCart } from "@/features/cartList/model/cart-list-slice";
import { IconDelete } from "@/images/icon-delete";
import { decreaseAmount } from "@/widgets/basket/model/basket-slice";
import { useDispatch } from "react-redux";


export function CartItem({amount,id,image,name,discountPrice,finalyPrice}:Pick<ICartCard,"amount"| "id"| "image" | "name" | "discountPrice" | "finalyPrice">){

    const dispatch = useDispatch()
    
    function handleClick(){
        dispatch(decreaseAmount(amount))
        dispatch(removeCart(id))
    }

    return <div className="cart-item">
        <div className="cart-item_container"><img className="cart-item_img" src={image} alt="" /></div>
        <div className="cart-item_info">
            <span>{name}</span>
            <span className="cart-item_price">${discountPrice} x {amount} <span className="cart-item_fullprice">${finalyPrice}</span></span>
        </div>
        <div onClick={handleClick} className="cart-item_delete"><IconDelete className="cart-item_svg"/></div>
    </div>
}