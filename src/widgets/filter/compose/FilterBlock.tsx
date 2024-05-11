import { ToggleFilter } from "@/features/filterControlers";
import { filterList } from "../lib/filterList";
import { IFilterBlock } from "../lib/interface";
import { useState } from "react";

export function FilterBlock({keyFilter}: IFilterBlock){
    const [view, setView] = useState(true)
    
    return <div key={keyFilter} className={`filter-block`}>
        <p onClick={() => setView(prevState => !prevState)} style={{"width": "5rem"}} className="filter-block_title">{keyFilter}</p>
        {view && <div className="filter-block_list">
            {filterList[keyFilter].map((item)=> {
            return <ToggleFilter key={item} item={item} keyItem={keyFilter}/>
            })}
        </div>}
    </div>
}