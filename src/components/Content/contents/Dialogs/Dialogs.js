import styles from "./Dialogs.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import UsersContainer from "./Users/UsersContainer";

const Dialogs = (props) => {
    return (
        <div className={ styles.dialogs + " " + props.className }>
            <UsersContainer  className={ styles.list }/>
            <MessagesContainer  className={ styles.messages }/>
        </div>
    )
}

export default Dialogs;