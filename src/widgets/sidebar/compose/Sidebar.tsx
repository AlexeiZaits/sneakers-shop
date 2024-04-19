import { MouseEvent, useEffect, useRef } from "react";
import { TabList } from "@/features/index";
import {ReactComponent as CloseImg} from "@/images/icon-close.svg"
import { toggleSidebar } from "../model/sidebar-slice";
import { useDispatch } from "react-redux";

export function Sidebar(){

    const dispatch = useDispatch()

    const sidebarRef = useRef<HTMLDivElement>(null)

    function handleClick(){
        
        if (window.innerWidth <= 1024){
            dispatch(toggleSidebar(null))
        }
    }

    function handleClickSb(event: MouseEvent<HTMLDivElement> ){
        if (sidebarRef.current === event.target){
            document.documentElement.style.overflow = '';
            dispatch(toggleSidebar(null))
        }
    }

    useEffect(()=>{
        if (sidebarRef.current){
            sidebarRef.current.focus()
        }
    }, [])

    return <div ref={sidebarRef} onClick={handleClickSb} className="sidebar">
        <div className="sidebar-content">
            <div onClick={handleClick}><CloseImg/></div>
            <TabList handleClick={handleClick} className="sidebar"/>
        </div>
    </div>
}