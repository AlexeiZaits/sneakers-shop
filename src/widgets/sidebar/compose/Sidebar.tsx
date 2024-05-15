import { MouseEvent } from "react";
import { TabList } from "@/features/index";
import { ReactComponent as CloseImg } from "@/images/icon-close.svg"
import { toggleSidebar } from "../model/sidebar-slice";
import { useDispatch } from "react-redux";
import { useFocusEffect } from "@/shared/hooks/use-focus-effect";

export function Sidebar(){
    const dispatch = useDispatch()
    const [ref] = useFocusEffect()

    function handleClick(){
        if (window.innerWidth <= 1024){
            document.documentElement.style.overflow = '';
            dispatch(toggleSidebar(null))
        }
    }

    function handleClickOutside(event: MouseEvent<HTMLDivElement> ){
        if (ref.current === event.target){
            document.documentElement.style.overflow = '';
            dispatch(toggleSidebar(null))
        }
    }

     //TODO: переместить model в feat
    return <div ref={ref} onClick={handleClickOutside} className="sidebar">
        <div className="sidebar-content">
            <div onClick={handleClick}><CloseImg/></div>
            <TabList className="sidebar"/>
        </div>
    </div>
}