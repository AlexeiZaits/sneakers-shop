import { CardList } from "@/features/index"
import { Links } from "@/shared/index"
import { Filter, Sort } from "@/widgets/index"
import { useLocation } from "react-router-dom"


export function MainLayout(){
    const location = useLocation()
    
    
    return <div className="main">
        <Links pathname={location.pathname}/>
        <div className="main-container">
            <Filter/>
            <Sort/>
        </div>
        <CardList/>
    </div>
}
