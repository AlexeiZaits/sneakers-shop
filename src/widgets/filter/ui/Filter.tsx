import { Button } from "@/shared/index";
import { useToggleFilter } from "@/features/filterControlers/hook/use-toggle-filter";
import { FilterList } from "@/features/filterControlers";
import { useAppSelector } from "@/shared/hooks/storeHooks";
import styles from "./styles.module.scss"

export function Filter(){
    const filterView = useAppSelector(state => state.filterControl)
    const {handleEvent} = useToggleFilter()
    
    return <div className={styles.filter} onMouseLeave={() => handleEvent()}>
        <Button onMouseEnter={() => handleEvent()}>
            Filters
        </Button>
        {filterView ? <div  className={styles.list}>
            <FilterList/>
        </div>
        :null}
    </div>
}
