import User from "./User/User";
import styles from "./UserList.module.css";

const DialogsList = (props) => {

    const user = props.userDate.map((obj) => <User name={obj.name} id={obj.id} className={styles.item}/> )

    return (
        <div className={styles.dialogsList + " " + props.className}>
            {user}
        </div>
    )
}

export default DialogsList;