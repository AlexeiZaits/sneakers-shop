import { CardList, Links } from "@/features/index"
import { Filter, Sort } from "@/widgets/index"

export function MainLayout(){
    
    return <div className="main">
        <Links/>
        <div className="main-container">
            <Filter/>
            <Sort/>
        </div>
        <CardList/>
    </div>
}
