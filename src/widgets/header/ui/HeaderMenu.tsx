import { TabList } from "@/features/index";
import { useHeader } from "../hook/use-header";
import { ReactComponent as MenuImg } from "@/images/icon-menu.svg";
import { ReactComponent as LogoImg } from "@/images/logo.svg";
import { Link } from "react-router-dom";

export function HeaderMenu(){
    const {handleClickSidebar} = useHeader()
    
    return <div className='header-box header-tablist'>
        <div onClick={handleClickSidebar} className="header-menu"><MenuImg/></div>
        <Link to={"/sneakers-shop"}><div className="header-logo"><LogoImg/></div></Link>
        <TabList/>
    </div>
}