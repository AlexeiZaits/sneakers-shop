import { keysFilter } from "../lib/filterList";
import { useRef } from "react";
import { FilterBlock } from "./FilterBlock";
import { ClearFilters } from "@/features/filterControlers/compose/clearFilters";
import { ConfirmFilter } from "@/features/filterControlers/compose/confirmFilter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { toggleFilter } from "@/features/filterControlers/model/filter-controls-slice";
import { OpenFilter } from "@/features/filterControlers/compose/openFilter";
import { useFocusEffect } from "@/shared/lib/useFocusEffect";

export function Filter(){
    const filter = useSelector((state: RootState) => state.filterControl)
    const filterRef = useRef<HTMLDivElement>(null)
    const dispatch = useDispatch()
    
    useFocusEffect(filter, filterRef)
    
    function handleBlur(){
        setTimeout(()=> {
            if(filter) {
                dispatch(toggleFilter(false))
            }
        }, 200)
    }
    
    return <div className="filter">
        <OpenFilter/>
        {filter ? <div onBlur={handleBlur} tabIndex={0} ref={filterRef} className="filter-list">
            {keysFilter.map((key)=>{
                return <FilterBlock keyFilter={key}/>
            })}
            <div className="filter-buttons">
                <ClearFilters/>
                <ConfirmFilter/>
            </div>
        </div>
        :null}
    </div>
}
