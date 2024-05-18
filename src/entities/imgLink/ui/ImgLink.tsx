import { Link } from "react-router-dom";

export interface imgLinkProps {
    text: string,
    src: string,
    to: string,
}

export function ImgLink({text, src, to}:imgLinkProps){
    return <Link className="home-imgs_link" to={to}>
        <img className="home-imgs_item" src={src} alt="forMen"/>
        <span className="home-imgs_text">{text}</span>
    </Link>
}