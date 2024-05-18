import { Link } from "react-router-dom";
import { useLocationNames } from "../hook/use-location-names";
import { getNameLink } from "../lib/getNameLink";
import { getPathLink } from "../lib/getPathLink";

export function Links(){
    const {links} = useLocationNames()
    
    return <div className="links">
        {links.map((item, index) => {
            if (index === 0){
                return <Link key={item} className="links-item_active" to={`/${item}`}>Home </Link>
            }
            if (index === links.length-1){
                return <span key={item}> {getNameLink(item)}</span>
            }
            return <Link key={item} className="links-item_active" to={getPathLink(links, index)}>
                {getNameLink(item)}
            </Link>
        })}
    </div>
}
