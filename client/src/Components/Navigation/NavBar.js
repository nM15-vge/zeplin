import { NavLink } from "react-router-dom";
import { useContent } from "../../Context/ContentContext";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const { pages } = useContent();
    return (
        <div>
            <NavLink to="/" id={styles.home}>
                {/* <img src={`${process.env.PUBLIC_URL}/abc_logo.svg`} /> */}
            </NavLink>
        </div>
    )
}

export default NavBar;
