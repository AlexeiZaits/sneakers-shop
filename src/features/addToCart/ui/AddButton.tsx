import {  CartImg } from "src/app/images/icon-cart"
import { useAddCart } from "../hook/use-add-cart"

export function AddButton(){
    const {handleClick} = useAddCart()
          
    return <div onClick={handleClick} className="add-button">
        <CartImg fill={"white"}/>
        <span className="add-button_text">Add to cart</span>
    </div>
}

