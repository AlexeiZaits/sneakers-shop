import { ToggleFilterItem } from "@/features/filterControlers";
import { filterList } from "../lib/filterList";
import { IFilterBlock } from "../lib/interface";
import { useToggler } from "@/shared/hooks/use-toggler";
import { Button } from "@/shared/ui/button";


export function FilterBlock({keyFilter}: IFilterBlock){
    const {view, handleEvent} = useToggler()
    // className="filter-block_title"
    return <div key={keyFilter} className={`filter-block`}>
        <Button onClick={handleEvent} >{keyFilter}</Button>
        {view && <div className="filter-block_list">
            {filterList[keyFilter].map((item)=> {
            return <ToggleFilterItem key={item} item={item} keyItem={keyFilter}/>
            })}
        </div>}
    </div>
}