import { MouseEvent, useRef } from "react";
import { TabList } from "@/features/index";
import { ReactComponent as CloseImg } from "@/images/icon-close.svg"
import { toggleSidebar } from "../model/sidebar-slice";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@/shared/hooks/useFocusEffect";

export function Sidebar(){
    const dispatch = useDispatch()
    const sidebarRef = useRef<HTMLDivElement>(null)

    function handleClick(){
        if (window.innerWidth <= 1024){
            document.documentElement.style.overflow = '';
            dispatch(toggleSidebar(null))
        }
    }

    function handleClickOutside(event: MouseEvent<HTMLDivElement> ){
        if (sidebarRef.current === event.target){
            document.documentElement.style.overflow = '';
            dispatch(toggleSidebar(null))
        }
    }

    useFocusEffect(sidebarRef)
    
    return <div ref={sidebarRef} onClick={handleClickOutside} className="sidebar">
        <div className="sidebar-content">
            <div onClick={handleClick}><CloseImg/></div>
            <TabList className="sidebar"/>
        </div>
    </div>
}