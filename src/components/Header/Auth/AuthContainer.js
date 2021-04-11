import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";

class AuthContainer extends React.Component {

    onClick = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {
            withCredentials: true,
        })
            .then((response) => {
                debugger;
            });
    };

    render() {
        return <Auth  onClick={ this.onClick }/>
    };
}



export default connect(null, null)(AuthContainer);