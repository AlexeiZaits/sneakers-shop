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
                key={item.href}
                to={`/sneakers-shop/${item.href}`}
                className={`${className? className+`-tabs_item` :`tabs-item`} 
                ${location.pathname === "/sneakers-shop/"+item.href ? `${className ? className+`-tabs_active` :`tabs-active`}` : null }`}>
                {item.name}
            </Link> 
        })}
    </div>
}