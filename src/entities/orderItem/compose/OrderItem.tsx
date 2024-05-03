import { ICartCard, removeCart } from "@/features/cartList/model/cart-list-slice";
import { IconDelete } from "@/images/icon-delete";
import { decreaseAmount } from "@/widgets/basket/model/basket-slice";
import { useDispatch } from "react-redux";

export function OrderItem({id, image, name, amount, finalyPrice,discount, price}:Pick<ICartCard, "id" | "image" | "name" | "amount" | "finalyPrice"|"price"| "discount">){

    const dispatch = useDispatch();


    function handleClick(){
        dispatch(decreaseAmount(amount))
        dispatch(removeCart(id))
    }
    
    return <div className="order-item">
        <div className="order-container">
            <div className="order-item_container">
                <img className="order-item_img" src={image} alt="" />
            </div>
            <div className="order-flex order-special">
                    <span className="order-name">Name</span>
                    <span className="order-value">{name}</span>
            </div> 
        </div>
        <div className="order-container">
            <div className="order-flex order-flex_amount">
                <span className="order-name ">Amount</span>
                <span className="order-value order-amount">{amount}</span>
            </div> 
            <div className="order-flex ">
                <span className="order-name">Price</span>
                <span className="order-value">${finalyPrice}{discount? <span className="order-through">${price*amount}</span>: null}</span>
            </div>
        </div>
        <div onClick={handleClick} className="order-delete"><IconDelete className="order-svg"/> </div>
    </div>
}