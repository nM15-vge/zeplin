import { NavLink } from "react-router-dom";
import { useContent } from "../../Context/ContentContext";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const { pages } = useContent();
    return (
        <div id={styles.navigation}>
            <div id={styles.leftNav}>
                <NavLink to="/" id={styles.logo}>
                    <img src={`${process.env.PUBLIC_URL}/abc_logo.svg`} alt=""/>
                </NavLink>
                <div id={styles.menu}>
                    {pages && pages.map(({title, slug}) => (
                    <NavLink to={`/${slug}`} key={title} className={styles.menuLinks}>{title}</NavLink>
                    ))}
                </div>
            </div>
            <div id={styles.rightNav}>
                <span>Contact Us</span>
            </div>
        </div>
    )
}

export default NavBar;
