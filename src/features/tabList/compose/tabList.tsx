import { Link, useLocation } from "react-router-dom";
import { tabs } from "../lib/tabs";
import { ITabList } from "../lib/interfaces";
import { useClickTab } from "../hook/use-click-tab";

export function TabList({className}:ITabList){
    const location = useLocation()
    const {handleClick} = useClickTab()
    
    return <div className={className ? className+"-tabs": 'tabs'}>
        {tabs.map((item)=> {
           return <Link onClick={handleClick}
                key={item.href}
                to={`/sneakers-shop/${item.href}`}
                className={`${className? className+`-tabs_item` :`tabs-item`} 
                ${location.pathname === "/sneakers-shop/"+item.href ? `${className ? className+`-tabs_active` :`tabs-active`}` : null }`}>
                {item.name}
            </Link>
        })}
    </div>
}