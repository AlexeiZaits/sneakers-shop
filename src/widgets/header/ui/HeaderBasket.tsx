import { CartImg } from "src/app/images/icon-cart";
import avatar from "@/app/images/git-hub-img.png";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";
import { useCalcAmountGoods } from "@/features/basketList/hook/use-calc-amount-goods";

export function HeaderBasket(){
    const {widjet, handleEvent} = useToggleWidjet("basket")
    const {amountGoods} = useCalcAmountGoods()
    
    return <div className='header-box'>
        <div onClick={handleEvent} className="header-cart">
            <CartImg fill={widjet}/>
            {amountGoods ? <div className="header-amount">{amountGoods}</div> : null}
        </div>
        <a href="https://github.com/AlexeiZaits" target="blank">
            <img className="header-avatar" src={avatar} alt="avatar" />
        </a> 
    </div>
}
