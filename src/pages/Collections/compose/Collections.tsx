import { CardList, SortCard } from "@/features/index"
import { Links } from "@/shared/index"
import { Filter } from "@/widgets/filter"
import { useLocation } from "react-router-dom"

export function Collections(){
    const location = useLocation()
    
    return <div className="main">
        <Links pathname={location.pathname}/>
        <div className="main-container">
            <Filter/>
            <SortCard/>
        </div>
        <CardList/>
    </div>
}
