import { linkImg } from "../lib/link"
import { useLightBox } from "../hook/use-light-box"

export function ListLightBox(){
    const {imgs, data, currentSlide, handleClick} = useLightBox()
    
    return <div className="box-list">
        {imgs.map((item, index) => {
            return <div onClick={() =>handleClick(index)} key={index}  className={`box-item ${index === currentSlide? "box-light": ""}`}>
                <img className="box-item_img"  src={linkImg(data.id)+item} alt=""/>
            </div>
        } )}
    </div>
}