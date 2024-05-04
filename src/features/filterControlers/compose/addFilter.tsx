import { removeValue, setValue } from "@/widgets/filter/model/filter-cards-slice"
import { RootState } from "@/store.ts"
import { useDispatch, useSelector } from "react-redux"

interface IFilterItem{
    item: string,
    keyItem: number|string,
}

export function AddFilter({item, keyItem}:IFilterItem){
    const filterCardsList = useSelector((state: RootState) => state.filterCardsList)
    const dispatch = useDispatch()
    
    function handleClick(key:string|number, value:string){
        if(!filterCardsList[key].includes(value)) 
            {dispatch(setValue({key: key, value:value}))}
        else {
            dispatch(removeValue({key: key, value: value}))
        }
    }

    return <span key={item} onClick={()=> handleClick(keyItem, item)} 
            className={`filter-value ${filterCardsList[keyItem].includes(item)? "filter-value_active": ""}`}>
            {keyItem === "colors"? <span className="filter-value_colors" style={{"background" : `${item}`}}></span>: ""}
            {item}
            {keyItem === "price"? "$": ""}
    </span>
}