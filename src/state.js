const avPath = "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg";

let store = {
    _state: {

        sideBar : {
            navigation: {
                navData: [
                    { id: 1, path: "/profile", title: "Profile" },
                    { id: 2, path: "/dialogs", title: "Messages" },
                    { id: 3, path: "/news", title: "News" },
                    { id: 4, path: "/music", title: "Music" },
                    { id: 5, path: "/settings", title: "Settings" },
                ],
            },

            friends: {
                friendsDate: [
                    {id: 1, avatarPath: avPath, name: "Andrey"},
                    {id: 1, avatarPath: avPath, name: "Andrey"},
                    {id: 1, avatarPath: avPath, name: "Andrey"},
                    {id: 1, avatarPath: avPath, name: "Andrey"},
                    {id: 1, avatarPath: avPath, name: "Andrey"},
                    {id: 1, avatarPath: avPath, name: "Andrey"},
                ],
            },
        },
        

        contents: {
            profile: {
                myPosts: {
                    postData: [
                        { id: 1, text: "hi" },
                        { id: 2, text: "hi" },
                        { id: 3, text: "hi" },
                    ],

                    postValue: "",
                },
            },

            dialogs: {
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
            },
        },
    },

    _subscriber() {
        alert("Subscriber not set");
    },

    _updatePostValue(text) {
        this._state.contents.profile.myPosts.postValue = text;

        this._subscriber(this._state);
    },

    _updateMessageValue(text) {
        this._state.contents.dialogs.messages.messageValue = text;
    
        this._subscriber(this._state);
    },

    _addMessage() {
        let messageDataArr = this._state.contents.dialogs.messages.messageData;
        let newMessage = this._state.contents.dialogs.messages.messageValue;
    
        messageDataArr.push(
            { 
                id: messageDataArr.length + 1,
                avatarPath: avPath,
                massage: newMessage,
                avtor: false,
            }
        )
    
        this._state.contents.dialogs.messages.messageValue = "";
        
        this._subscriber(this._state);
    
    },

    _addPost() {

        let postDataArr = this._state.contents.profile.myPosts.postData;
        let postValue = this._state.contents.profile.myPosts.postValue;
    
        postDataArr.push(
            {
                id: postDataArr.length + 1,
                text: postValue,
            }
        )
    
        this._state.contents.profile.myPosts.postValue = "";
    
        this._subscriber(this._state);
    },

    dispatch(action) {
        switch (action.type) {
            case "UPDATE-POST-VALUE" : 
                this._updatePostValue(action.text);
                break;
            
            case "UPDATE-MESSAGE-VALUE" : 
                this._updateMessageValue(action.text);
                break;
            
            case "ADD-MESSAGE" : 
                this._addMessage();
                break;

            case "ADD-POST" : 
                this._addPost();
                break;

            default: break;
        };
    },

    getState() {
        return this._state;
    },

    setSubscriber(observer) {
        this._subscriber = observer;
    },
};

export default store;