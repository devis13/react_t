import { connect } from 'react-redux';
import { updateMessageValueActionCreator, addMessageActionCreator } from '../../../../../redux/dialogs_reducer';
import Messages from './Messages';

let mapStateToProps = (state, ownProps) => {

    const messageState = state.contents.dialogs.messages

    return {
        className: ownProps.className ,
        messageData: messageState.messageData,
        messageValue: messageState.messageValue,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeValue: (text) => {
            dispatch(updateMessageValueActionCreator(text));
        },

        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;