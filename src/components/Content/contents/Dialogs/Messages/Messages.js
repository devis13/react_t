import React from 'react';
import Message from "./Message/Message";
import styles from "./Messages.module.css";

const Messages = (props) => {
    let newMessageElement = React.createRef();

    const onChangeValue = () => {
        props.dispatch({
            type: "UPDATE-MESSAGE-VALUE",
            text: newMessageElement.current.value,
        });
    }

    const addMessage = () => {
        props.dispatch({
            type: "ADD-MESSAGE",
        });
    }

    const massage = props.state.messageData.map((obj) => {
        return <Message className={ styles.message } 
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
                        value={ props.state.messageValue }
                        onChange={ onChangeValue } />
            <button onClick={ addMessage } className={styles.button}>send</button>
        </div>
    )
}

export default Messages;