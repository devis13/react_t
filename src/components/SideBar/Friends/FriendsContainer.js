import { connect } from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state, ownProps) => {
    return {
        className: ownProps.className,
        friendsData: state.sideBar.friends.friendsData,
    }
};

const FriendsContainer = connect(mapStateToProps)( Friends );

export default FriendsContainer;