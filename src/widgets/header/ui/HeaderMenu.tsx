import { TabList } from "@/features/index";
import { ReactComponent as MenuImg } from "@/app/images/icon-menu.svg";
import { ReactComponent as LogoImg } from "@/app/images/logo.svg";
import { Link } from "react-router-dom";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";

export function HeaderMenu(){
    const {handleEvent} = useToggleWidjet("sidebar")
    
    return <div className='header-box header-tablist'>
        {window.innerWidth < 1024 && <div onClick={handleEvent} className="header-menu"><MenuImg/></div>}
        <Link to={"/sneakers-shop"}><div className="header-logo"><LogoImg/></div></Link>
        <TabList/>
    </div>
}