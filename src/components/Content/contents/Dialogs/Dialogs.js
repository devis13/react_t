import styles from "./Dialogs.module.css";
import UserList from "./UserList/UserList";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs + " " + props.className}>
            <UserList   className={styles.list}
                        userDate={props.userDate}/>
            <Messages className={styles.messages}
                        messageDate={props.messageDate}/>
        </div>
    )
}

export default Dialogs;