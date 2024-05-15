import { linkImg } from "../lib/link"
import { Link } from "react-router-dom"
import { useLightBox } from "../hook/use-light-box"
import { useLocationLast } from "../hook/use-location-last"

export function CurrentLightBox(){
    const { imgs, currentSlide, data } = useLightBox()
    const { url } = useLocationLast()
    
    return (
        <div className="box-current">
            {imgs.map((item, index) => (
                url !== "modal" ? (
                    <Link key={index} to={`modal`}>
                        <img
                            className={`box-current_img ${index === currentSlide ? "box-current_animation" : ""}`}
                            src={linkImg(data.id) + item}
                            alt=""
                        />
                    </Link>
                ) : (
                    <img
                        key={index}
                        className={`box-current_img ${index === currentSlide ? "box-current_animation" : ""}`}
                        src={linkImg(data.id) + item}
                        alt=""
                    />
                )
            ))}
        </div>
    );
}
