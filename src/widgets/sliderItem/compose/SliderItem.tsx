import { ICard } from "@/features/slider/lib/interfaces"

interface ISliderItem{
    index: number;
    currentCard: number;
    item : ICard;
}

export function SliderItem({index, item, currentCard}: ISliderItem){
    return <div className={`slider-item 
                    ${index === currentCard ? "slider-item_active": ""}
                    ${index > currentCard? "slider-item_prev": ""}
                    ${index < currentCard? "slider-item_next": ""}`
                    }>
                    <img className="slider-img" src={item.image} alt="" />
                    <div className="slider-info">
                        <span className="slider-item_title">{item.name}</span>
                        <span className="slider-item_description">{item.description}</span>
                        <span className="slider-item_price">${item.price}</span>
                    </div>
                    
    </div>
}