const profileReducer = (state, action) => {
    debugger;

    switch (action.type) {
        case "UPDATE-POST-VALUE": 
            state.myPosts.postValue = action.text;

            return state;

        case "ADD-POST": 
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

        default:    
            return state;
    };

    return state;
}

export default profileReducer;