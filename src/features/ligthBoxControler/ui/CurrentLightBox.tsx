import { linkImg } from "../lib/link"
import { Link } from "react-router-dom"
import { useLocationLast } from "../hook/use-location-last"
import { useCard } from "@/features/collectionItemInfo/hook/use-card"
import { useSlide } from "@/features/sliderControler/hook/use-slider"
import styles from "./current.module.scss";
import { getClassNames } from "../../../shared/lib/getClassNames"



export function CurrentLightBox(){
    const [{data, imgs},] = useCard()
    const [currentSlide,] = useSlide()
    const { url } = useLocationLast()
    
    return (
        <div className={styles.current}>
            {data && imgs.map((item, index) => (
                url !== "modal" ? (
                    <Link key={index} to={`modal`}>
                        <img
                            className={getClassNames(index === currentSlide, styles, "img", "animation")}
                            src={linkImg(data.id) + item}
                            alt=""
                        />
                    </Link>
                ) : (
                    <img
                        key={index}
                        className={getClassNames(index === currentSlide, styles, "img", "animation")}
                        src={linkImg(data.id) + item}
                        alt=""
                    />
                )
            ))}
        </div>
    );
}
