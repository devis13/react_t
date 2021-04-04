const UPDATE_POST_VALUE = "UPDATE-POST-VALUE";
const ADD_POST = "ADD-POST";
const CREATE_PROFILE = "CREATE-PROFILE"
const CHANGE_HIDEN_CONTACTS = "CHANGE-HIDEN-CONTACTS";

const initialState = {
    profileData: null,
    hiddenContacts: false,
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
        case UPDATE_POST_VALUE: 
            stateCopy.myPosts.postValue = action.text;

            return stateCopy;

        case ADD_POST: 
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
        
        case CREATE_PROFILE:
            // debugger;
            stateCopy.profileData = {...action.profileData};
                
            return stateCopy;

        case CHANGE_HIDEN_CONTACTS:
            // debugger;
            stateCopy.hiddenContacts = !stateCopy.hiddenContacts;
                
            return stateCopy;

        default: return stateCopy;
    };
}

export const createProfile = (profileData) => {
    // debugger;
    return {
        type: CREATE_PROFILE,
        profileData: profileData,
    }
};

export const changeHiddenContacts = () => {
    return {
        type: CHANGE_HIDEN_CONTACTS,
    }
};

export const updatePostValue = (text) => {
    return {
        type: UPDATE_POST_VALUE,
        text: text,
    };
};

export const addPost = () => {
    return { type: ADD_POST };
};

export default profileReducer;