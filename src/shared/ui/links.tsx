import { Link } from "react-router-dom";

interface ILinks{
    pathname : string
    name?: string
}

export function Links({pathname}:ILinks){
    const links = pathname.split("/").filter(item => {
        return item !== ""
    });
    
    return <div className="links">
        <Link className="links-item_active" to={`/${links[0]}`}>Home </Link>
        {links.map((item, index)=> {
            if (index === 0){
                return null
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
