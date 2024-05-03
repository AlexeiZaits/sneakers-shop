import { ChangeEvent, useState } from "react"
import { CheckRussianNumber } from "../lib/russianNumber"
import { apiPostOrder } from "src/api/apiPostOrder"
import { checkoutCart } from "@/features/cartList/model/cart-list-slice"
import { useDispatch } from "react-redux"
import { resetAmount } from "@/widgets/basket/model/basket-slice"
import {  useNavigate } from "react-router-dom"



export function SendOrder(){

    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    
    const [number, setNumber] = useState("+7")
    const [check, setCheck] = useState(true)

    function handleChange(event:ChangeEvent<HTMLInputElement>){
        setCheck(true)
        if(CheckRussianNumber(event.currentTarget.value)){
            setNumber(event.currentTarget.value)
        }
    }

    function handleClick(){
        if(number.length === 12){
            navigate("/sneakers-shop")
            dispatch(checkoutCart(null))
            dispatch(resetAmount(null))
            apiPostOrder()
            
        }else{
            setCheck(false)
        }
    }

    return <div className="send">
        <div className="send-container">
            <span className="send-text">Fill in your phone number:</span>
            <input className="send-input" onChange={handleChange} type="tel" name=""  value={number}/>
            {check? null:<span className="send-check">Check your number!</span>}
        </div>
        <button  className="send-checkout" onClick={handleClick}>Checkout</button>
    </div>
}