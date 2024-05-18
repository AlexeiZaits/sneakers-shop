import { Button } from "@/shared/index"
import { keysFilter } from "../lib/filterList"
import { FilterBlock } from "../ui/FilterBlock"
import { useToggleFilter } from "../hook/use-toggle-filter"

export function FilterList(){
    const {handleEvent} = useToggleFilter()

    return <>
    {keysFilter.map((key)=>{
        return <FilterBlock key={key} keyFilter={key}/>
    })}
    <div className="filter-buttons">
        <Button onClick={() => handleEvent(true)}>
            Clear
        </Button>
        <Button onClick={handleEvent}>
            Confirm 
        </Button>
    </div>
    </>
}