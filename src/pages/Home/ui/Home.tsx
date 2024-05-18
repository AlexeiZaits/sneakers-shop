import { Slider } from "@/widgets/slider";
import forMen from "@/app/images/forMen.jpg";
import forWomen from "@/app/images/forWomen.jpg";
import { ImgLink } from "@/entities/index";

export function Home(){
    return <div className="main">
        <div className="home-imgs">
            <ImgLink src={forMen} text={"for him"} to={"men"}/>
            <ImgLink src={forWomen} text={"for her"} to={"women"}/>
        </div>
        <div className="home-slider">
            <Slider/>
        </div>
    </div>
}