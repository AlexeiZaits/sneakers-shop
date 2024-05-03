import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"
import { linkImg } from "../lib/link"
import { ILightBox } from "../lib/inteface"


export function ListLightBox({setCurrentImg, currentImg}:ILightBox){
    const {data, imgs} = useSelector((state: RootState) => state.collectionItem)
    
    return <div className="box-list">
    {imgs.map((item, index) => {
        return <div onClick={() =>setCurrentImg(index)}  className={`box-item ${index === currentImg? "box-light": ""}`}>
            <img className="box-item_img" src={linkImg(data.id)+item} alt=""/>
        </div>
    } )}
</div>
}