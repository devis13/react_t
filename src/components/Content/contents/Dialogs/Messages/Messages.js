import React from 'react';
import Message from "./Message/Message";
import styles from "./Messages.module.css";

const Messages = (props) => {
    const newMessageElement = React.createRef();

    const onChangeValue = () => {
        const text = newMessageElement.current.value;
        props.onChangeValue(text);
    }

    const addMessage = () => {
        props.addMessage();
    }

    const massage = props.messageData.map((obj) => {
        return <Message className={ styles.message } 
                        key={ obj.id } 
                        id={ obj.id }  
                        text={ obj.massage } 
                        avtor={ obj.avtor }
                        avatarPath={ obj.avatarPath }/>;
    });

    return (
        <div className={ styles.messages + " " + props.className }>
            <div className={ styles.messageWrap }>{ massage }</div>
            <textarea   ref={ newMessageElement }
                        className={ styles.textarea }
                        value={ props.messageValue }
                        onChange={ onChangeValue } />
                        
            <button onClick={ addMessage } className={styles.button}>
                        send
            </button>
        </div>
    )
}

export default Messages;