import * as axios from "axios";
import React from 'react';
import { connect } from 'react-redux';
import { changeCurrentPage, changeFollow, changePagesCount, createUsers, deleteUsers, changeLoading } from '../../../../redux/users_reducer';
import Users from './Users';

class UsersAPIContainer extends React.Component {
    

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        if(this.props.usersData.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((respons) => {
                this.props.createUsers(respons.data.items);
                this.props.changePagesCount(respons.data.totalCount);
            })
        }
    };

    onClick(page) {
        this.props.changeCurrentPage(page);
        this.props.changeLoading();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`)
            .then((respons) => {
                this.props.changeLoading();
                this.props.createUsers(respons.data.items);
            })
    }



    render() {
        return (
            <Users  onClick={ this.onClick }
                    currentPage={ this.props.currentPage }
                    loading={ this.props.loading }
                    pagesCount={ this.props.pagesCount }
                    usersData={ this.props.usersData }
                    onChangeFollow={ this.props.changeFollow }
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
    }
    
};

let mapDispatchToPropsObj = {
        changeFollow,
        createUsers,
        deleteUsers,
        changePagesCount,
        changeCurrentPage,
        changeLoading,
};


const UsersContainer = connect(mapStateToProps, mapDispatchToPropsObj)(UsersAPIContainer);


export default UsersContainer;