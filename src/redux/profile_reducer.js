const updatePostValue = "UPDATE-POST-VALUE";
const addPost = "ADD-POST";

const initialState = {
    myPosts: {
        postData: [
            { id: 1, text: "hi" },
            { id: 2, text: "hi" },
            { id: 3, text: "hi" },
        ],

        postValue: "",
    },
};

const profileReducer = (state = initialState, action) => {
    // debugger;

    switch (action.type) {
        case updatePostValue: 
            state.myPosts.postValue = action.text;

            return state;

        case addPost: 
            let postDataArr = state.myPosts.postData;
            let postValue = state.myPosts.postValue;
        
            postDataArr.push(
                {
                    id: postDataArr.length + 1,
                    text: postValue,
                }
            )
        
            state.myPosts.postValue = "";

            return state;

        default: return state;
    };
}

export const updatePostValueActionCreator = (text) => {
    return {
        type: updatePostValue,
        text: text,
    };
};

export const addPostActionCreator = () => {
    return { type: addPost };
};

export default profileReducer;