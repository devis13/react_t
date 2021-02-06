import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.css";

const Dialog = (props) => {
    const puth = "/dialogs/" + props.id;

    return (
        <div className={styles.dialog + " " + props.className}>
            <NavLink to={puth} className={styles.name} activeClassName={styles.active}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;