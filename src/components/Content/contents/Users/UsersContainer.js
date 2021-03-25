import { connect } from 'react-redux';
import { changeFollowAC } from '../../../../redux/users_reducer';
import Users from './Users';

let mapStateToProps = (state, ownProps) => {

    const usersState = state.contents.users
    
    return {
        className: ownProps.className ,
        usersData: usersState.usersData,
    }
    
};

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeFollow: (index) => {
            dispatch(changeFollowAC(index));
        },
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);


export default UsersContainer;