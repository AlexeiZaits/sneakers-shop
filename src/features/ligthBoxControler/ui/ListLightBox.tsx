import { linkImg } from "../lib/link"
import { useCard } from "@/features/collectionItemInfo/hook/use-card"
import { useSlide } from "@/features/sliderControler/hook/use-slider"
import { getClassNames } from "@/shared/lib/getClassNames";
import styles from "./list.module.scss";

export function ListLightBox(){
    const [{data, imgs},] = useCard()
    const [currentSlide, setSlide] = useSlide()
    
    return <div className={styles.list}>
        {data && imgs.map((item, index) => {
            return <div onClick={() => setSlide(index)} key={index}  className={getClassNames(index === currentSlide, styles, "item", "light")}>
                <img className={styles.img} src={linkImg(data.id)+item} alt=""/>
            </div>
        } )}
    </div>
}