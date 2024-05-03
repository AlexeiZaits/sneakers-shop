import { useDispatch } from "react-redux";
import { TabList } from "@/features/index";
import { ReactComponent as MenuImg } from "@/images/icon-menu.svg";
import { ReactComponent as LogoImg } from "@/images/logo.svg";
import { toggleSidebar } from "../../sidebar/model/sidebar-slice";
import { Link } from "react-router-dom";
import { clearFilters } from "@/features/filterCards/model/filter-cards-slice";

export function HeaderMenu(){

    const dispatch = useDispatch()

    function handleClick(){
        document.documentElement.style.overflow = 'hidden';
        dispatch(toggleSidebar(null))
        dispatch(clearFilters(null))
    }

    return <div className='header-box header-tablist'>
        <div onClick={handleClick} onTouchStart={handleClick} className="header-menu"><MenuImg/></div>
        <Link to={"/sneakers-shop"}><div className="header-logo"><LogoImg/></div></Link>
        <TabList/>
    </div>
}