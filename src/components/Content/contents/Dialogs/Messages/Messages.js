import React from 'react';
import Message from "./Message/Message";
import styles from "./Messages.module.css";

const Messages = (props) => {
    // debugger;


    let newMessageElement = React.createRef();

    let newMessage = () => {

        // debugger;
        let text = newMessageElement.current.value;
        props.addMessage(text);

        newMessageElement.current.value = "";
    };

    const massage = props.state.messageData.map((obj) => {
        return <Message className={styles.message} 
                        id={obj.id}  
                        text={obj.massage} 
                        avtor={obj.avtor}
                        avatarPath={obj.avatarPath}/>;
    });

    return (
        <div className={styles.messages + " " + props.className}>
            <div className={styles.messageWrap}>{massage}</div>
            <textarea ref={newMessageElement} className={styles.textarea}></textarea>
            <button onClick={newMessage} className={styles.button}>send</button>
        </div>
    )
}

export default Messages;