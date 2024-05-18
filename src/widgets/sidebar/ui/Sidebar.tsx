import { MouseEvent } from "react";
import { TabList } from "@/features/index";
import {ReactComponent as CloseImg} from "@/app/images/icon-close.svg"
import { useFocusEffect } from "@/shared/hooks/use-focus-effect";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";

export function Sidebar(){
    const {widjet, handleEvent} = useToggleWidjet("sidebar")
    const [ref] = useFocusEffect(widjet)
    
    function handleClickOutside(event: MouseEvent<HTMLDivElement> ){
        if (ref.current === event.target){
            handleEvent()
        }
    }
    
    return <>{widjet && <div ref={ref} onClick={handleClickOutside} className="sidebar">
        <div className="sidebar-content">
            <div onClick={handleEvent}><CloseImg/></div>
            <TabList className="sidebar"/>
        </div>
    </div>}
    </>
}