import { Slider } from "@/widgets/slider";
import forMen from "@/images/forMen.jpg";
import forWomen from "@/images/forWomen.jpg";
import { Link } from "react-router-dom";

export function Home(){
    return <div className="main">
        <div className="home-imgs">
            {/* TODO: imgLink */}
            <Link className="home-imgs_link" to={'men'}><img className="home-imgs_item" src={forMen} alt="forMen"/><span className="home-imgs_text">for him</span></Link>
            <Link className="home-imgs_link" to={'women'}><img className="home-imgs_item" src={forWomen} alt="forWomen" /><span className="home-imgs_text">for her</span></Link>
        </div>
        <div className="home-slider">
            <Slider/>
        </div>
    </div>
}