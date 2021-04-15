import React from "react";
import { connect } from "react-redux";
import { changeAuthorized, getAuthorizedPages } from "../../../redux/auth-reducer";
import Auth from "./Auth";

class AuthContainer extends React.Component {

    onClick = (e) => {
        this.props.getAuthorizedPages(e);
    };

    render() {
        return <Auth    onClick={ this.onClick }
                        authorized={ this.props.authorized }/>
    };
}


const mapStateToProps = (state) => {
    const authState =  state.header.auth
    return {
        authorized: authState.authorized,
    };
};

const mapDispatchToPropsObj = {
    changeAuthorized,
    getAuthorizedPages,
};


export default connect(mapStateToProps, mapDispatchToPropsObj)(AuthContainer);