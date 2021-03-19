import { connect } from "react-redux";
import Users from "./Users";

let mapStateToProps = (state, ownProps) => {

    const usersState = state.contents.dialogs.users

    return {
        className: ownProps.className,
        userData: usersState.userData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;