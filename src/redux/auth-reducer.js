const CHANGE_AUTH_STATE = "CHANGE-AUTH-STATE";
const CHANGE_AUTHORIZED = "CHANGE-AUTHORIZED";


const initialState = {
    data: null,
    messages: null,
    fieldsErrors: null,
    resultCode: null,
    authorized: false,
};

const authReducer = (state = initialState, action) => {
    // debugger;
    let stateCopy = {...state};

    switch (action.type) {
        case CHANGE_AUTH_STATE: 
            stateCopy = {...action.newState};

            return stateCopy;

        case CHANGE_AUTHORIZED: 
            stateCopy.authorized = !stateCopy.authorized;

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

export const changeAuthorized = (newState) => {
    // debugger;
    return {
        type: CHANGE_AUTHORIZED,
    }
};



export default authReducer;