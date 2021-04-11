const CHANGE_AUTH_STATE = "CHANGE-AUTH-STATE";


const initialState = {
    data: null,
    messages: null,
    fieldsErrors: null,
    resultCode: null,
};

const authReducer = (state = initialState, action) => {
    // debugger;
    let stateCopy = {...state};

    switch (action.type) {
        case CHANGE_AUTH_STATE: 
            stateCopy = {...action.newState};

            return stateCopy;

        default: return stateCopy;
    };
}

export const changeAuthState = (newState) => {
    // debugger;
    return {
        type: CHANGE_AUTH_STATE,
        newState: newState,
    }
};

export default authReducer;