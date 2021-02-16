import styles from "./Dialogs.module.css";
import Users from "./Users/Users";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs + " " + props.className}>
            <Users   className={styles.list}
                        state={props.state.users}/>
            <Messages className={styles.messages}
                        state={props.state.messages}
                        addMessage={ props.addMessage }/>
        </div>
    )
}

export default Dialogs;