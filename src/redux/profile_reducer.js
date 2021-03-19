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
    let stateCopy = {...state};
    stateCopy.myPosts = {...state.myPosts}

    switch (action.type) {
        case updatePostValue: 
            stateCopy.myPosts.postValue = action.text;

            return stateCopy;

        case addPost: 
            stateCopy.myPosts.postData = [...state.myPosts.postData];
            let postDataArr = stateCopy.myPosts.postData;
            let postValue = stateCopy.myPosts.postValue;
        
            postDataArr.push(
                {
                    id: postDataArr.length + 1,
                    text: postValue,
                }
            )
        
            stateCopy.myPosts.postValue = "";

            return stateCopy;

        default: return stateCopy;
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