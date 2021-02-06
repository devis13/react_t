import Message from "./Message/Message";
import styles from "./Messages.module.css";

const Messages = (props) => {
    return (
        <div className={styles.messages + " " + props.className}>
            <Message className={styles.massage} text="Hello!!" />
        </div>
    )
}

export default Messages;