import { Button } from "@/shared/index";
import { useToggleFilter } from "@/features/filterControlers/hook/use-toggle-filter";
import { FilterList } from "@/features/filterControlers";
import { useAppSelector } from "@/shared/hooks/storeHooks";

export function Filter(){
    const filterView = useAppSelector(state => state.filterControl)
    const {handleEvent} = useToggleFilter()
    
    return <div className="filter" onMouseLeave={() => handleEvent()}>
        <Button onClick={() => handleEvent()}>
            Filters
        </Button>
        {filterView ? <div  className="filter-list">
            <FilterList/>
        </div>
        :null}
    </div>
}
