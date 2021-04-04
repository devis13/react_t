import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createProfile, changeHiddenContacts } from "../../../../redux/profile_reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
            let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;

            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
                .then((response) => {
                    this.props.createProfile(response.data)
                })
    };

    render() {
        return <Profile className={this.props.className}
                        profileData={this.props.profileData}
                        hiddenContacts={this.props.hiddenContacts}
                        changeHiddenContacts={this.props.changeHiddenContacts}/>;
    };
}

let mapStateToProps = (state, ownProps) => {

    const profileData = state.contents.profile.profileData;

    return {
        className: ownProps.className,
        profileData: profileData,
        hiddenContacts: state.contents.profile.hiddenContacts
    }
};

let mapDispatchToPropsObj = {
    createProfile,
    changeHiddenContacts,
};

const withUrlProfileComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToPropsObj)(withUrlProfileComponent);