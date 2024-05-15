import { Link } from "react-router-dom";
import { useLocationNames } from "../hook/use-location-names";

export function Links(){
    const {links} = useLocationNames()
    
    return <div className="links">
        {links.map((item, index)=> {
            if (index === 0){
                return <Link className="links-item_active" to={`/${links[0]}`}>Home </Link>
            }
            if (index === links.length-1){
                return <span key={item[0]}> {item[0].toUpperCase()}{item.slice(1,)}</span>
            }
            return <Link key={`/${links[0]}/${item}`} className="links-item_active" to={`/${links[0]}/${item}`}>
                {item[0].toUpperCase()}{item.slice(1,)}
            </Link>
        })}
    </div>
}
