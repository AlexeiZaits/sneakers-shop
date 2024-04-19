import { HeaderMenu } from "../ui/HeaderMenu";
import { HeaderBasket } from "../ui/HeaderBasket";

export function Header(){
    return  <div  className='header'>
        <HeaderMenu/>
        <HeaderBasket/>
    </div>
}
