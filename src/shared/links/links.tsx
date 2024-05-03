import { Link } from "react-router-dom";

interface ILinks{
    pathname : string
    name?: string
}

export function Links({pathname, name}:ILinks){
    const links = pathname.split("/").filter(item => {
        return item !== ""
    });
    
    return <div className="links">
        <Link className="links-active" to={`/${links[0]}`}>Home </Link>
        {links.map((item, index)=> {
            if (item === "" || index === 0){
                return ""
            }
            if (index === links.length-1){
                if(name) return <span key={name} className="links-unactive"> {name}</span>
                return <span key={item[0]}> {item[0].toUpperCase()}{item.slice(1,)}</span>
            }
            return <Link key={`/${links[0]}/${item}`} className="links-active" to={`/${links[0]}/${item}`}> {item[0].toUpperCase()}{item.slice(1,)} </Link>
        })}
    </div>
}
