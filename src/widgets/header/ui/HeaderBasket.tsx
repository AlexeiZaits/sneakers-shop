import { CartImg } from "@/images/icon-cart";
import avatar from "@/images/git-hub-img.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { toggleBasket } from "../../basket/model/basket-slice";

export function HeaderBasket(){
    const dispatch = useDispatch()
    const {basket, amount} = useSelector((state: RootState) => state.basket)
    
    function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>){
        event.preventDefault()
        dispatch(toggleBasket(true))
    }

    return <div className='header-box'>
        <div onClick={handleClick} className="header-cart">
            <CartImg fill={basket}/>
            {amount ? <div className="header-amount">{amount}</div> : null}
        </div>
        <a href="https://github.com/AlexeiZaits" target="blank">
            <img className="header-avatar" src={avatar} alt="avatar" />
        </a> 
    </div>
}
