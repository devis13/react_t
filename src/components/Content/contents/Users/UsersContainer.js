import { connect } from 'react-redux';
import { changeFollowAC, changePagesCountAC, createUsersAC, deleteUsersAC } from '../../../../redux/users_reducer';
import Users from './Users';

let mapStateToProps = (state, ownProps) => {

    const usersState = state.contents.users
    // debugger;
    return {
        className: ownProps.className,
        usersData: usersState.usersData,
        usersState: usersState,
        currentPage: usersState.currentPage,
        pageSize: usersState.pageSize,
        totalUsersCount: usersState.totalUsersCount,
        pagesCount: usersState.pagesCount,
    }
    
};

let mapDispatchToProps = (dispatch) => {

    return {
        onChangeFollow: (index) => {
            dispatch(changeFollowAC(index));
        },
        createUsers: (arr) => {
            dispatch(createUsersAC(arr));
        },
        deleteUsers: () => {
            dispatch(deleteUsersAC());
        },
        changePagesCount: (totalUsersCount) => {
            dispatch(changePagesCountAC(totalUsersCount));
        },
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;