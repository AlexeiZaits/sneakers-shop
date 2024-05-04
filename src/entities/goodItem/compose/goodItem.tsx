import { ICard } from "@/features/cardList/lib/interfaces";
import { Link } from "react-router-dom";

export function GoodItem({id, name, isNew, image, price}:Omit<ICard, 'sex' | 'discount' | 'display'|"color"|"brand">){
    
    return <Link to={`/sneakers-shop/collections/${id}`} className="card">
        {isNew ? <span className="card-new">new</span>: null }
        <div className="card-container"><img className="card-img" src={image} alt="cross"/></div>
        <div className="card-info"><span>{name}</span><span>{price}$</span></div>
    </Link>
}