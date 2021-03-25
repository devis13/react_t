const changeFollow = "CHANGE-FOLLOW";
const createState = "CREATE-STATE";

const initialState = {
    usersData: [],
};

const usersReducer = (state = initialState, action) => {
    
    let stateCopy = { ...state };

    switch (action.type) {
        case changeFollow:
            stateCopy.usersData = [...state.usersData];
            stateCopy.usersData[action.id].followed = !stateCopy.usersData[action.id].followed;

            return stateCopy;
        
        case createState:
            return {...state, usersData: [...state.usersData, ...action.usersData]};

        default: return state;
    };
}

export const changeFollowAC = (index) => {
    return {
        type: changeFollow,
        id: index,
    };
};

export const createStateAC = (arr) => {
    return {
        type: createState,
        usersData: arr,
    };
};

export default usersReducer;