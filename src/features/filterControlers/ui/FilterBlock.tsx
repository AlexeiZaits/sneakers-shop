import { filterList } from "../lib/filterList";
import { IFilterBlock } from "../lib/interface";
import { useToggler } from "@/shared/hooks/use-toggler";
import { Button } from "@/shared/ui/button";
import { ToggleFilterItem } from "./ToggleFilter";
import styles from "./styles.module.scss";

export function FilterBlock({keyFilter}: IFilterBlock){
    const {view, handleEvent} = useToggler()
    
    return <div key={keyFilter} className={styles.block}>
        <Button onClick={handleEvent} >{keyFilter}</Button>
        {view && <div className={styles.list}>
            {filterList[keyFilter].map((item)=> {
            return <ToggleFilterItem 
                key={item} 
                item={item} 
                keyItem={keyFilter}/>
            })}
        </div>}
    </div>
}