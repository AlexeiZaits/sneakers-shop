
import { TabList } from "../../../features/tabList/compose/tabList";
import { ReactComponent as Logo } from "../../../images/logo.svg";
import { ReactComponent as Cart } from "../../../images/icon-cart.svg";
import avatar from "../../../images/image-avatar.png";

export function Header(){
    return  <div className='header'>
        <div className='header-box header-tablist'>
            <div className="header-logo"><Logo/></div>
            <TabList/>
        </div>
        <div className='header-box'>
            <div className="header-cart"><Cart/></div>
            <img className="header-avatar" src={avatar} alt="avatar" />
        </div>
    </div>
    
}
