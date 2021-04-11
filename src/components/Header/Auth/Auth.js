import styles from "./auth.module.scss";

const Auth = (props) => {
    return <a onClick={props.onClick} href="#" className={styles.link}>Login</a>
};

export default Auth;