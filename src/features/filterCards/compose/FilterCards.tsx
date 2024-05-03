
import { filterList, keys } from "../lib/filterList";
import { useEffect, useRef, useState } from "react";
import { FilterButtons } from "./FilterButtons";
import { FilterItem } from "@/entities/filterItem";

export function FilterCards(){
    
    const [filter, setFilter] = useState(false)
    const filterRef = useRef<HTMLDivElement>(null)
    

    useEffect(()=> {
        if (filter) filterRef.current?.focus()
    }, [filter])

    function handleBlur(){
        setTimeout(() => {
            if (filter){
                setFilter(false)
            }
        }, 200)
    }
    
    return <div className="filter">
        <span onClick={() => setFilter((prevState) => !prevState)} className="filter-title">Filters</span>
        {filter ? <div onBlur={handleBlur} tabIndex={0} ref={filterRef} className="filter-list">
            {keys.map((key)=>{
                return <div key={key} className={`filter-block`}>
                    <p className="filter-block_title">{key}</p>
                    <div className="filter-block_list">
                    {filterList[key].map((item)=> {
                       return <FilterItem item={item} keyItem={key}/>
                    })}
                    </div>
                </div>
            })}
        <FilterButtons setFilter={setFilter}/>
        </div>
        :null}
        
    </div>
}
