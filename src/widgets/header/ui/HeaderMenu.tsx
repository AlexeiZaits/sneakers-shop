import { TabList } from "@/features/index";
import { ReactComponent as MenuImg } from "@/shared/assets/images/icon-menu.svg";
import { ReactComponent as LogoImg } from "@/shared/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useToggleWidjet } from "@/shared/hooks/use-toggle-widjet";
import styles from "./styles.module.scss";
import classNames from "classnames";

export function HeaderMenu(){
    const {handleEvent} = useToggleWidjet("sidebar")
    
    return <div className={classNames(styles.box, styles.tabList)}>
        {window.innerWidth < 1024 && <div onClick={handleEvent} className={styles.menu}><MenuImg/></div>}
        <Link to={"/sneakers-shop"}><div className="header-logo"><LogoImg/></div></Link>
        <TabList/>
    </div>
}