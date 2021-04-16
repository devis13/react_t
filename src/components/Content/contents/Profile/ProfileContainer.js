import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { showProfile } from "../../../../redux/profile_reducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
            let userId = this.props.match.params.userId ? this.props.match.params.userId : 2;
            this.props.showProfile(userId);
    };

    render() {
        return <Profile className={this.props.className}
                        profileData={this.props.profileData}
                        hiddenContacts={this.props.hiddenContacts}
                        changeHiddenContacts={this.props.changeHiddenContacts}
                        loading={ this.props.loading }/>;
    };
}

let mapStateToProps = (state, ownProps) => {
    const profileState = state.contents.profile;
    const profileData = profileState.profileData;

    return {
        className: ownProps.className,
        profileData: profileData,
        hiddenContacts: profileState.hiddenContacts,
        loading: profileState.loading,
    }
};

let mapDispatchToPropsObj = {
    showProfile,
};

const withUrlProfileComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToPropsObj)(withUrlProfileComponent);