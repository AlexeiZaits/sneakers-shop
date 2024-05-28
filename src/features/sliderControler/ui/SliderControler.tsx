import { useSliderControler } from "../hook/use-slider-controler"
import classNames from "classnames";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

interface ISliderControler{
    isSecondary?: boolean
    children: ReactNode,

}

export function SliderControler({isSecondary, children}:ISliderControler){
    const {handleClickLeft, handleClickRigth} = useSliderControler()
    
    const contolerClass = classNames({
        [styles.controler]: true,
        [styles.controlerSecondary]: isSecondary,
    });
        
    return <div className={styles.slider}>
        <div style={{transform: "rotate(180deg)"}}  onClick={handleClickLeft} className={classNames(contolerClass, {[styles.left]: true})}>
            {isSecondary ? <div className={styles.centre}>{children}</div>: children}
        </div>
        <div onClick={handleClickRigth} className={contolerClass}>
            {isSecondary ? <div className={styles.centre}>{children}</div>: children}
        </div>
    </div>
}