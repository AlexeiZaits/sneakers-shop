import { AddFilter } from "@/features/filterControlers/compose/addFilter";
import { filterList } from "../lib/filterList";
import { IFilterBlock } from "../lib/interface";

export function FilterBlock({keyFilter}: IFilterBlock){
    return <div key={keyFilter} className={`filter-block`}>
    <p className="filter-block_title">{keyFilter}</p>
    <div className="filter-block_list">
        {filterList[keyFilter].map((item)=> {
        return <AddFilter item={item} keyItem={keyFilter}/>
        })}
    </div>
</div>
}