const CHANGE_FOLLOW = "CHANGE-FOLLOW";
const CREATE_USERS = "CREATE-USERS";
const DELETE_USERS = "DELETE-USERS";
const CHANGE_PAGES_COUNT = "CHANGE-PAGES-COUNT";
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
const CHANGE_LOADING = "CHANGE-LOADING";


const initialState = {
    usersData: [],
    pageSize: 5,
    totalUsersCount: 20,
    pagesCount: [],
    currentPage: 1,
    loading: false,
};

const usersReducer = (state = initialState, action) => {
    
    let stateCopy = { ...state };

    switch (action.type) {
        case CHANGE_FOLLOW:
            stateCopy.usersData = [...state.usersData];
            stateCopy.usersData[action.id].followed = !stateCopy.usersData[action.id].followed;

            return stateCopy;
        
        case CREATE_USERS:
            return {...state, usersData: [...action.usersData]};

        case DELETE_USERS:
            return {...state, usersData: [...action.usersData]};

        case CHANGE_PAGES_COUNT:
            stateCopy.totalUsersCount = action.totalUsersCount;
            stateCopy.pagesCount = [...state.pagesCount];

            let totalUsersCount = 100;
            let totalPageCount = Math.ceil(totalUsersCount/stateCopy.pageSize);
            for(let i = 1; i <= totalPageCount; i++) {

                stateCopy.pagesCount.push(i);
            };
    
            return stateCopy;
        
        case CHANGE_CURRENT_PAGE: 
            stateCopy.currentPage = action.currentPage;
            
            return stateCopy;

        case CHANGE_LOADING:
            stateCopy.loading = !stateCopy.loading;
            return stateCopy;

        default: return state;
    };
}

export const changeFollow = (index) => {
    return {
        type: CHANGE_FOLLOW,
        id: index,
    };
};

export const createUsers = (arr) => {
    return {
        type: CREATE_USERS,
        usersData: arr,
    };
};

export const deleteUsers = () => {
    return {
        type: DELETE_USERS,
        usersData: [],
    }
}

export const changePagesCount = (totalUsersCount) => {
    return {
        type: CHANGE_PAGES_COUNT,
        totalUsersCount: totalUsersCount,
    }
}

export const changeCurrentPage = (currentPage) => {
    return {
        type: CHANGE_CURRENT_PAGE,
        currentPage: currentPage,
    }
}

export const changeLoading = () => {
    return {
        type: CHANGE_LOADING,
    }
}

export default usersReducer;