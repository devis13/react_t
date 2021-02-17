const avPath = "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg";

let renderEntireTree;

const state = {

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
};


export const newPostValue = (text) => {
    // debugger;
    state.contents.profile.myPosts.postValue = text;

    renderEntireTree(state)
};

export const newMessageValue = (text) => {
    state.contents.dialogs.messages.messageValue = text;

    renderEntireTree(state)
};



export const addMessage = () => {
    let messageDataArr = state.contents.dialogs.messages.messageData;
    let newMessage = state.contents.dialogs.messages.messageValue;

    messageDataArr.push(
        { 
            id: messageDataArr.length + 1,
            avatarPath: avPath,
            massage: newMessage,
            avtor: false,
        }
    )

    state.contents.dialogs.messages.messageValue = "";
    
    renderEntireTree(state);

};

export const addPost = () => {

    let postDataArr = state.contents.profile.myPosts.postData;
    let postValue = state.contents.profile.myPosts.postValue;

    postDataArr.push(
        {
            id: postDataArr.length + 1,
            text: postValue,
        }
    )

    state.contents.profile.myPosts.postValue = "";

    renderEntireTree(state);
};

export const renderDom = (observer) => {
    renderEntireTree = observer;
};

export default state;