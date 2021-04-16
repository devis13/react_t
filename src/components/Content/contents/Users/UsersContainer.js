import React from 'react';
import { connect } from 'react-redux';

import {    getUsers,
            switchPage,
            changeSubscribe } from '../../../../redux/users_reducer';

import Users from './Users';

class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.usersData, this.props.pageSize, this.props.currentPage);
    };

    onClick = (currentPage) => {
        this.props.switchPage(this.props.pageSize, currentPage);
    }

    onChangeSubscriping = (index, id, followed) => {
        this.props.changeSubscribe(index, id, followed);
    };

    render() {
        return (
            <Users  onClick={ this.onClick }
                    currentPage={ this.props.currentPage }
                    loading={ this.props.loading }
                    pagesCount={ this.props.pagesCount }
                    usersData={ this.props.usersData }
                    onChangeSubscriping={ this.onChangeSubscriping}
                    lockedSubscribeBtn={ this.props.lockedSubscribeBtn }
                    isAuth={ this.props.isAuth }
            />
        )
    };
}

let mapStateToProps = (state, ownProps) => {

    const usersState = state.contents.users

    return {
        className: ownProps.className,
        usersData: usersState.usersData,
        usersState: usersState,
        currentPage: usersState.currentPage,
        pageSize: usersState.pageSize,
        totalUsersCount: usersState.totalUsersCount,
        pagesCount: usersState.pagesCount,
        loading: usersState.loading,
        lockedSubscribeBtn: usersState.lockedSubscribeBtn,
        isAuth: state.header.auth.authorized,
    }
    
};

let mapDispatchToPropsObj = {
        switchPage,
        changeSubscribe,
        getUsers,
};


const UsersContainer = connect(mapStateToProps, mapDispatchToPropsObj)(UsersAPIContainer);


export default UsersContainer;