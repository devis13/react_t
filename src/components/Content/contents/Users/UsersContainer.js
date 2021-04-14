import React from 'react';
import { connect } from 'react-redux';
import { getUsers, follow, unfollow } from "../../../../api/api";

import {    changeCurrentPage,
            changeFollow, 
            changePagesCount, 
            createUsers, 
            deleteUsers, 
            changeLoading, 
            toggleSubscribeInProgres,
            changeLockedSubscribeBtn} from '../../../../redux/users_reducer';

import Users from './Users';

class UsersAPIContainer extends React.Component {
    
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        if(this.props.usersData.length === 0){
            this.props.changeLoading();
            getUsers(this.props.pageSize, this.props.currentPage)
            .then((respons) => {
                this.props.changeLoading();
                this.props.createUsers(respons.data.items);
                this.props.changePagesCount(respons.data.totalCount);
            })
        }
    };

    onClick(currentPage) {
        this.props.changeCurrentPage(currentPage);
        this.props.changeLoading();
        getUsers(this.props.pageSize, currentPage)
            .then((respons) => {
                this.props.changeLoading();
                this.props.createUsers(respons.data.items);
            })
    }


    blockedBtn = (id) => {
        this.props.toggleSubscribeInProgres();
        this.props.changeLockedSubscribeBtn(id);
    };

    changeFollow = (index, id, followed) => {
        if(followed) {
            this.blockedBtn(id);
            unfollow(id)
                .then((respons) => {
                    this.blockedBtn(id);
                    if(respons.data.resultCode === 0) {
                        this.props.changeFollow(index);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {
            this.blockedBtn(id);
            follow(id)
                .then((respons) => {
                    this.blockedBtn(id);
                    if(respons.data.resultCode === 0) {
                        this.props.changeFollow(index);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

    };

    render() {
        return (
            <Users  onClick={ this.onClick }
                    currentPage={ this.props.currentPage }
                    loading={ this.props.loading }
                    pagesCount={ this.props.pagesCount }
                    usersData={ this.props.usersData }
                    changeFollow={ this.changeFollow }
                    lockedSubscribeBtn={ this.props.lockedSubscribeBtn }
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
    }
    
};

let mapDispatchToPropsObj = {
        changeFollow,
        createUsers,
        deleteUsers,
        changePagesCount,
        changeCurrentPage,
        changeLoading,
        toggleSubscribeInProgres,
        changeLockedSubscribeBtn,
};


const UsersContainer = connect(mapStateToProps, mapDispatchToPropsObj)(UsersAPIContainer);


export default UsersContainer;