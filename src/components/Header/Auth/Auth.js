import { NavLink } from "react-router-dom";
import styles from "./auth.module.scss";

const Auth = (props) => {
    // debugger;
    return <NavLink to="/login" onClick={props.onClick} className={styles.link}>{props.authorized ? "LogOut" : "Login"}</NavLink>
};

export default Auth;