import React from 'react';
import { updateMessageValueActionCreator, addMessageActionCreator } from '../../../../../redux/dialogs_reducer';
import Messages from './Messages';


const MessagesContainer = (props) => {
    // debugger;
    const state =  props.store.getState()
    const messageState = state.contents.dialogs.messages

    const onChangeValue = (text) => {
        props.store.dispatch(updateMessageValueActionCreator(text));
    }

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    return <Messages    className={ props.className }
                        messageData={ messageState.messageData }
                        onChangeValue={ onChangeValue } 
                        addMessage={ addMessage }
                        messageValue={ messageState.messageValue }/>
}

export default MessagesContainer;