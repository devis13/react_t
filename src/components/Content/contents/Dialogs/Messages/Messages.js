import React from 'react';
import Message from "./Message/Message";
import styles from "./Messages.module.css";
import { updateMessageValueActionCreator, addMessageActionCreator } from '../../../../../redux/dialogs_reducer';


const Messages = (props) => {
    const newMessageElement = React.createRef();

    const onChangeValue = () => {
        const text = newMessageElement.current.value;
        props.dispatch(updateMessageValueActionCreator(text));
    }

    const addMessage = () => {
        props.dispatch(addMessageActionCreator());
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