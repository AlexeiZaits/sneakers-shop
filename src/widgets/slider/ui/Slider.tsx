import { SliderControler } from "@/features/sliderControler";
import { SliderList } from "@/features/sliderList";
import { ReactComponent as Next } from "@/shared/assets/images/icon-next.svg"
import styles from "./styles.module.scss";

export function Slider(){
    
    return <div className={styles.slider}>
        <span className={styles.title}>new arrival</span>
        <div className={styles.container}>
            <SliderControler>
                <Next/>
            </SliderControler>
            <SliderList/>
        </div>
    </div>
}


