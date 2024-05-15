import { CartImg } from "@/images/icon-cart";
import { useHeader } from "../hook/use-header";
import avatar from "@/images/git-hub-img.png";

export function HeaderBasket(){
    const {handleClickBasket, basket, amount} = useHeader()

    return <div className='header-box'>
        <div onClick={handleClickBasket} className="header-cart">
            <CartImg fill={basket}/>
            {amount ? <div className="header-amount">{amount}</div> : null}
        </div>
        <a href="https://github.com/AlexeiZaits" target="blank">
            <img className="header-avatar" src={avatar} alt="avatar" />
        </a> 
    </div>
}
