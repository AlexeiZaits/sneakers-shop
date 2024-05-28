import { Link } from "react-router-dom";
import { useLocationNames } from "../hook/use-location-names";
import { getNameLink } from "../lib/getNameLink";
import { getPathLink } from "../lib/getPathLink";
import styles from "./styles.module.scss";

export function Links(){
    const {links} = useLocationNames()
    
    return <div className={styles.links}>
        {links.map((item, index) => {
            if (index === 0){
                return <Link key={item} className={styles.active} to={`/${item}`}>Home </Link>
            }
            if (index === links.length-1){
                return <span key={item}> {getNameLink(item)}</span>
            }
            return <Link key={item} className={styles.active} to={getPathLink(links, index)}>
                {getNameLink(item)}
            </Link>
        })}
    </div>
}
