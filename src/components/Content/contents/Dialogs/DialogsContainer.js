import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../../hok/withAuthRedirect";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs isAuth={this.props.isAuth} className={this.props.className}/>
    };
}

const mapStateToProps = (state, ownProps) => {
    return {
        className: ownProps.className,
        isAuth: state.header.auth.authorized,
    };
};

export default compose(
        connect(mapStateToProps, null),
        withAuthRedirect,
    )(DialogsContainer);