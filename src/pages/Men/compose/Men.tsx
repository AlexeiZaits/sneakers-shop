import { CardList, FilterCards, SortCard } from "@/features/index"
import { Links } from "@/shared/index"
import { useLocation } from "react-router-dom"


export function Men(){
    const location = useLocation()
    
    return <div className="main">
        <Links pathname={location.pathname}/>
        <div className="main-container">
            <FilterCards/>
            <SortCard/>
        </div>
        <CardList filter="man"/>
    </div>
}
