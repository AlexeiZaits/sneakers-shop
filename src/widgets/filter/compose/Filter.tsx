import { keysFilter } from "../lib/filterList";
import { useRef } from "react";
import { FilterBlock } from "./FilterBlock";
import { ClearFilters } from "@/features/filterControlers/compose/clearFilters";
import { ConfirmFilter } from "@/features/filterControlers/compose/confirmFilter";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store.ts";
import { toggleFilter } from "@/features/filterControlers/model/filter-controls-slice";
import { OpenFilter } from "@/features/filterControlers/compose/openFilter";
import { useFocusEffect } from "@/shared/hooks/useFocusEffect";

export function Filter(){
    const dispatch = useDispatch()
    const filterView = useSelector((state: RootState) => state.filterControl)
    const filterRef = useRef<HTMLDivElement>(null)
    
    useFocusEffect(filterRef)
    
    return <div className="filter" onMouseLeave={() => dispatch(toggleFilter(false))}>
        <OpenFilter/>
        {filterView ? <div  className="filter-list">
            {keysFilter.map((key)=>{
                return <FilterBlock key={key} keyFilter={key}/>
            })}
            <div className="filter-buttons">
                <ClearFilters/>
                <ConfirmFilter/>
            </div>
        </div>
        :null}
    </div>
}
