import styles from "./Dialogs.module.css";
import Users from "./Users/Users";
import MessagesContainer from "./Messages/MessagesContainer";

const Dialogs = (props) => {
    const state = props.store.getState();
    const userState = state.contents.dialogs.users;

    return (
        <div className={ styles.dialogs + " " + props.className }>
            <Users  className={ styles.list }
                    userData={ userState.userData }/>
                    
            <MessagesContainer  className={ styles.messages }
                                store={ props.store }/>
        </div>
    )
}

export default Dialogs;