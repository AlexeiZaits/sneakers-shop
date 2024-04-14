import { Link, useLocation } from "react-router-dom";
import { tabs } from "../lib/tabs";

interface ITabList{
    className?: string,
    handleClick?: ()=> void,

}

export function TabList({className, handleClick}:ITabList){
    const location = useLocation()
    
    return <div className={className ? className+"-tabs": 'tabs'}>
        {tabs.map((item)=> {
           return <Link onClick={handleClick}
                to={item.href} 
                className={`${className? className+`-tabs_item` :`tabs-item`} 
                ${location.pathname === item.href ? `${className ? className+`-tabs_active` :`tabs-active`}` : null }`}>
                {item.name}
            </Link> 
        })}
    </div>
}