import { CurrentLightBox, ListLightBox, SliderControler } from "@/features/index"
import { ReactComponent as Next } from "@/shared/assets/images/icon-next.svg"
import styles from "./styles.module.scss"

export function LightBox(){

    return <div className={styles.box}>
        {window.innerWidth < 540 && <SliderControler isSecondary={true} > 
                <Next/>
        </SliderControler>}
        <CurrentLightBox />
        <ListLightBox />
    </div>
}