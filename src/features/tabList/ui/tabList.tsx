import { Link, useLocation } from "react-router-dom";
import { tabs } from "../lib/tabs";
import { ITabList } from "../lib/interfaces";
import { useClickTab } from "../hook/use-click-tab";
import { getClassNames } from "@/shared/lib/getClassNames";
import styles from "./styles.module.scss";

export function TabList({isSidebar=false}:ITabList){
    const location = useLocation()
    const {handleClick} = useClickTab()
    
    return <div className={isSidebar ? styles.sidebarTabs: styles.tabs}>
        {tabs.map((item)=> {
           return <Link onClick={handleClick}
                key={item.href}
                to={`/sneakers-shop/${item.href}`}
                className={isSidebar ? 
                getClassNames(location.pathname === "/sneakers-shop/"+item.href, styles, "sidebarItem", "sidebarActive")
                : getClassNames(location.pathname === "/sneakers-shop/"+item.href, styles, "item", "active")}>
                {item.name}
            </Link>
        })}
    </div>
}