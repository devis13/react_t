const dialogsReducer = (state, action) => {
    const avPath = "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg";

    switch (action.type) {       
        case "UPDATE-MESSAGE-VALUE" : 
            state.messages.messageValue = action.text;
            return state;

        case "ADD-MESSAGE" : 
            let messageDataArr = state.messages.messageData;
            let newMessage = state.messages.messageValue;
        
            messageDataArr.push(
                { 
                    id: messageDataArr.length + 1,
                    avatarPath: avPath,
                    massage: newMessage,
                    avtor: false,
                }
            )

            state.messages.messageValue = "";

            return state;

        default: 
            return state; 
    };
}

export default dialogsReducer;