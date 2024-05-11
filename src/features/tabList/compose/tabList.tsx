import { Link, useLocation } from "react-router-dom";
import { tabs } from "../lib/tabs";
import { ITabList } from "../lib/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { toggleSidebar } from "@/widgets/sidebar/model/sidebar-slice";
import { clearFilters } from "@/widgets/filter/model/filter-cards-slice";
import { toggleFilter } from "@/features/filterControlers/model/filter-controls-slice";

export function TabList({className}:ITabList){
    const location = useLocation()
    const dispatch = useDispatch()
    const sidebarView = useSelector((state: RootState) => state.sidebar)
    const filter = useSelector((state: RootState) => state.filterControl)

    function handleClick(){
        if (sidebarView){
            dispatch(toggleSidebar(null))
        }
        if (filter){
            dispatch(toggleFilter(false)) 
        }
        dispatch(clearFilters(null))
    }

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