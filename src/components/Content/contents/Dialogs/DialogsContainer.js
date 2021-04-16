import React from "react";
import { connect } from "react-redux";
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

export default connect(mapStateToProps, null)(DialogsContainer);