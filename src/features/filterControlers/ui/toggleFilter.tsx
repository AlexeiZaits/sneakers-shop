import { useFilterItem } from "../hook/use-filter-item"

interface IFilterItem{
    item: string,
    keyItem: number|string,
}

export function ToggleFilterItem({item, keyItem}:IFilterItem){
    const {handleClick, filterCardsList} = useFilterItem()
    
    return <span key={item} onClick={() => handleClick(keyItem, item)}
            className={`filter-value ${filterCardsList[keyItem].includes(item)? "filter-value_active": ""}`}>
            {keyItem === "colors"? <span className="filter-value_colors" style={{"background" : `${item}`}}></span>: ""}
            {item}
            {keyItem === "price"? "$": ""}
    </span>
}