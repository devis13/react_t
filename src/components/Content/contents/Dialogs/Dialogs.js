import styles from "./Dialogs.module.css";
import UserList from "./UserList/UserList";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs + " " + props.className}>
            <UserList   className={styles.list}
                        state={props.state.userList}/>
            <Messages className={styles.messages}
                        state={props.state.messages}/>
        </div>
    )
}

export default Dialogs;