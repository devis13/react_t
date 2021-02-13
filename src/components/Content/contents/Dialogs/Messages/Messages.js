import Message from "./Message/Message";
import styles from "./Messages.module.css";

const Messages = (props) => {

    const massage = props.state.messageData.map((obj) => {
        return <Message className={styles.message} 
                        id={obj.id}  
                        text={obj.massage} 
                        avtor={obj.avtor}
                        avatarPath={obj.avatarPath}/>;
    });

    return (
        <div className={styles.messages + " " + props.className}>
            {massage}
        </div>
    )
}

export default Messages;