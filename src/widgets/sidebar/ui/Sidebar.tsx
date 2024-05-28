import { MouseEvent } from "react";
import { TabList } from "@/features/index";
import { ReactComponent as CloseImg } from "@/shared/assets/images/icon-close.svg"
import { useFocusEffect } from "@/shared/hooks/use-focus-effect";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";
import styles from "./styles.module.scss";

export function Sidebar(){
    const {widjet, handleEvent} = useToggleWidjet("sidebar")
    const [ref] = useFocusEffect(widjet)
    
    function handleClickOutside(event: MouseEvent<HTMLDivElement> ){
        if (ref.current === event.target){
            handleEvent()
        }
    }
    
    return <>{widjet && <div ref={ref} onClick={handleClickOutside} className={styles.sidebar}>
        <div className={styles.content}>
            <div onClick={handleEvent}><CloseImg/></div>
            <TabList isSidebar={true}/>
        </div>
    </div>}
    </>
}