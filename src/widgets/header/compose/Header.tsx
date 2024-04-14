
import { TabList } from "../../../features/tabList/compose/tabList";
import { ReactComponent as LogoImg } from "../../../images/logo.svg";
import { ReactComponent as CartImg } from "../../../images/icon-cart.svg";
import { ReactComponent as MenuImg } from "../../../images/icon-menu.svg";
import avatar from "../../../images/git-hub-img.png";
import { Basket } from "../../basket";
import { useState } from "react";

interface IHeader {
    handleClickSb: () => void
}

export function Header({handleClickSb}: IHeader){
    
    const [cart, setCart] = useState(false)

    function handleClick(){
        
        setCart(prevState => {
           return !prevState
        })
    }

    return  <div className='header'>
        <div className='header-box header-tablist'>
            <div onClick={handleClickSb} className="header-menu"><MenuImg/></div>
            <div className="header-logo"><LogoImg/></div>
            <TabList/>
        </div>
        <div className='header-box'>
            <div onClick={handleClick} className="header-cart"><CartImg/></div>
            <img className="header-avatar" src={avatar} alt="avatar" />
        </div>
        {cart ? <Basket/>: null}
    </div>
}
