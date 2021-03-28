const changeFollow = "CHANGE-FOLLOW";
const createUsers = "CREATE-USERS";
const deleteUsers = "DELETE-USERS";
const changePagesCount = "CHANGE-PAGES-COUNT";


const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    pagesCount: [],
    currentPage: 4,

};

const usersReducer = (state = initialState, action) => {
    
    let stateCopy = { ...state };

    switch (action.type) {
        case changeFollow:
            stateCopy.usersData = [...state.usersData];
            stateCopy.usersData[action.id].followed = !stateCopy.usersData[action.id].followed;

            return stateCopy;
        
        case createUsers:
            return {...state, usersData: [...state.usersData, ...action.usersData]};

        case deleteUsers:
            return {...state, usersData: [...action.usersData]};

        case changePagesCount:
            stateCopy.totalUsersCount = action.totalUsersCount;
            stateCopy.pagesCount = [...state.pagesCount];

            let totalUsersCount = 100;
            let totalPageCount = Math.ceil(totalUsersCount/stateCopy.pageSize);
            for(let i = 1; i <= totalPageCount; i++) {

                stateCopy.pagesCount.push(i);
                // stateCopy.pagesCount.push({
                //     id: i,
                //     page: i,
                // });
            };
    
            return stateCopy;

        default: return state;
    };
}

export const changeFollowAC = (index) => {
    return {
        type: changeFollow,
        id: index,
    };
};

export const createUsersAC = (arr) => {
    return {
        type: createUsers,
        usersData: arr,
    };
};

export const deleteUsersAC = () => {
    return {
        type: deleteUsers,
        usersData: [],
    }
}

export const changePagesCountAC = (totalUsersCount) => {
    return {
        type: changePagesCount,
        totalUsersCount: totalUsersCount,
    }
}

export default usersReducer;