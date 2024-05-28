import { Slider } from "@/widgets/slider";
import forMen from "@/shared/assets/images/forMen.jpg";
import forWomen from "@/shared/assets/images/forWomen.jpg";
import { ImgLink } from "@/entities/index";
import { Wrapper } from "@/shared/ui";
import styles from "./styles.module.scss";

export function Home(){
    return <Wrapper>
        <div className={styles.imgs}>
            <ImgLink src={forMen} text={"for him"} to={"men"}/>
            <ImgLink src={forWomen} text={"for her"} to={"women"}/>
        </div>
        {/* <div className="home-slider"> */}
            <Slider/>
        {/* </div> */}
    </Wrapper>
}