import { TabList } from "../../../features/tabList/compose/tabList";
import {ReactComponent as CloseImg} from "../../../images/icon-close.svg"

interface ISideabar{
    handleClick: () => void
}

export function Sidebar({handleClick}: ISideabar){
    return <div className="sidebar">
        <div className="sidebar-content">
            <div onClick={handleClick}><CloseImg/></div>
            <TabList handleClick={handleClick} className="sidebar"/>
        </div>
    </div>
}