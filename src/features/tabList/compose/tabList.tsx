import { tabs } from "../lib/tabs";


export function TabList(){
    return <div className="tabs">
        {tabs.map((item)=> {
           return <span className="tabs-item">{item}</span>
        })}
    </div>
}