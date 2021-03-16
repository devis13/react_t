const updateMessageValue = "UPDATE-MESSAGE-VALUE";
const addMessage = "ADD-MESSAGE";
const avPath = "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg";

const initialState = {
    users: {
        userData: [
            { name: "Andrey", id: "1" },
            { name: "Ivan", id: "2" },
            { name: "Tymur", id: "3" },
            { name: "Roman", id: "4" },
        ],
    },

    messages: {
        messageData: [
            { id: 1, avatarPath: avPath, massage: "Eu voluptate eu excepteur aliquip magna veniam nisi culpa cillum consectetur."
                            + "Consectetu laboris eu non laboris adipisicing nostrud nostrud laboris nisi ullamco dolore reprehenderit.", avtor: false},
            { id: 2, avatarPath: avPath, massage: "Hello!!!", avtor: true },
            { id: 3, avatarPath: avPath, massage: "Hello!!!", avtor: false },
            { id: 3, avatarPath: avPath, massage: "Hello!!!", avtor: false },
            { id: 3, avatarPath: avPath, massage: "Hello!!!", avtor: true },
            { id: 3, avatarPath: avPath, massage: "Hello!!!", avtor: false },
        ],

        messageValue: "",
    },
};

const dialogsReducer = (state = initialState, action) => {
    const avPath = "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg";

    switch (action.type) {       
        case updateMessageValue : 
            state.messages.messageValue = action.text;
            return state;

        case addMessage : 
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

export const updateMessageValueActionCreator = (text) => {
    return {
        type: updateMessageValue,
        text: text,
    };
};

export const addMessageActionCreator = () => {
    return { type: addMessage };
};

export default dialogsReducer;