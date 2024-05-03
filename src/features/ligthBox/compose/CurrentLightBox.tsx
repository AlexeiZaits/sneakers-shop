import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"
import { linkImg } from "../lib/link"
import { ILightBox } from "../lib/inteface"



export function CurrentLightBox({currentImg} :Pick<ILightBox, "currentImg">){
    const {data, imgs} = useSelector((state: RootState) => state.collectionItem)
    
    return <div className="box-current">
            {imgs.map((item, index) => {
                return <img className={`box-current_img ${index === currentImg ? "box-current_animation": ""}`} 
                src={linkImg(data.id)+item} alt=""/>
            } )}
    </div>
}