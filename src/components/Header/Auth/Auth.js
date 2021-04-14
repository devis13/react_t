import styles from "./auth.module.scss";

const Auth = (props) => {
    // debugger;
    return <a onClick={props.onClick} href="1" className={styles.link}>{props.authorized ? "LogOut" : "Login"}</a>
};

export default Auth;