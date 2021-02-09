const state = {
    navigation: {
        navDate: [
            { id: 1, path: "/profile", title: "Profile" },
            { id: 2, path: "/dialogs", title: "Messages" },
            { id: 3, path: "/news", title: "News" },
            { id: 4, path: "/music", title: "Music" },
            { id: 5, path: "/settings", title: "Settings" },
        ],
    },

    contents: {
        profile: {
            postData: [
                { id: 1, text: "hi" },
                { id: 2, text: "hi" },
                { id: 3, text: "hi" },
            ],
        },

        dialogs: {
            userList: {
                userDate: [
                    { name: "Andrey", id: "1" },
                    { name: "Ivan", id: "2" },
                    { name: "Tymur", id: "3" },
                    { name: "Roman", id: "4" },
                ],
            },

            messages: {
                messageDate: [
                    { id: 1, massage: "Hello!!!" },
                    { id: 2, massage: "Hello!!!" },
                    { id: 3, massage: "Hello!!!" },
                ],
            },
        },
    },
};

export default state;