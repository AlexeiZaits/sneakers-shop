import { RootState } from "@/store.ts"
import { useSelector } from "react-redux"
import { linkImg } from "../lib/link"
import { ILightBox } from "../lib/inteface"
import { Link, useLocation } from "react-router-dom"
    
export function CurrentLightBox({currentImg} :Pick<ILightBox, "currentImg"> ){
    const {data, imgs} = useSelector((state: RootState) => state.collectionItem)
    const location = useLocation()
    const modal = location.pathname.split("/").slice(-1)[0]
    
    // TODO: общий список для распечатывания
    // TODO: добавление перехода на modal
    return (
        <div className="box-current">
            {imgs.map((item, index) => (
                modal !== "modal" ? (
                    <Link key={index} to={`modal`}>
                        <img
                            className={`box-current_img ${index === currentImg ? "box-current_animation" : ""}`}
                            src={linkImg(data.id) + item}
                            alt=""
                        />
                    </Link>
                ) : (
                    <img
                        key={index}
                        className={`box-current_img ${index === currentImg ? "box-current_animation" : ""}`}
                        src={linkImg(data.id) + item}
                        alt=""
                    />
                )
            ))}
        </div>
    );
}
