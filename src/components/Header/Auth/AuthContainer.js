import React from "react";
import { connect } from "react-redux";
import { logIn } from "../../../api/api";
import { changeAuthorized } from "../../../redux/auth-reducer";
import Auth from "./Auth";

class AuthContainer extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        logIn()
            .then((response) => {
                this.props.changeAuthorized();
                debugger;
            });
    };

    render() {
        return <Auth    onClick={ this.onClick }
                        authorized={ this.props.authorized }/>
    };
}


const mapStateToProps = (state) => {
    // debugger;
    const authState =  state.header.auth
    return {
        authorized: authState.authorized,
    };
};

const mapDispatchToPropsObj = {
    changeAuthorized,
};


export default connect(mapStateToProps, mapDispatchToPropsObj)(AuthContainer);