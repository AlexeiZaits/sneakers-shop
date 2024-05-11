import { useDispatch } from "react-redux";
import { TabList } from "@/features/index";
import { ReactComponent as MenuImg } from "@/images/icon-menu.svg";
import { ReactComponent as LogoImg } from "@/images/logo.svg";
import { toggleSidebar } from "../../sidebar/model/sidebar-slice";
import { Link } from "react-router-dom";

export function HeaderMenu(){
    const dispatch = useDispatch()

    function handleClick(){
        document.documentElement.style.overflow = 'hidden';
        dispatch(toggleSidebar(null))
    }
    
    return <div className='header-box header-tablist'>
        <div onClick={handleClick} className="header-menu"><MenuImg/></div>
        <Link to={"/sneakers-shop"}><div className="header-logo"><LogoImg/></div></Link>
        <TabList/>
    </div>
}