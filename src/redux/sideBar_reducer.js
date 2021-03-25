const avPath = "https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg";

const initialState = {
    navigation: {
        navData: [
            { id: 1, path: "/profile", title: "Profile" },
            { id: 2, path: "/dialogs", title: "Messages" },
            { id: 3, path: "/news", title: "News" },
            { id: 4, path: "/music", title: "Music" },
            { id: 5, path: "/users", title: "Users" },
            { id: 6, path: "/settings", title: "Settings" },
        ],
    },

    friends: {
        friendsData: [
            {id: 1, avatarPath: avPath, name: "Andrey"},
            {id: 2, avatarPath: avPath, name: "Andrey"},
            {id: 3, avatarPath: avPath, name: "Andrey"},
            {id: 4, avatarPath: avPath, name: "Andrey"},
            {id: 5, avatarPath: avPath, name: "Andrey"},
            {id: 6, avatarPath: avPath, name: "Andrey"},
        ],
    },
};

const sideBarReducer = (state = initialState, action) => {

    return state;
}

export default sideBarReducer;