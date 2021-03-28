import * as axios from "axios";
import User from "./user/User";
import styles from "./Users.module.scss"
import usersImg from "../../../../img/user-img.png";
import React from "react";

class Users extends React.Component {
    componentDidMount() {
        if(this.props.usersData.length === 0){
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then((respons) => {
                this.props.createUsers(respons.data.items);
                this.props.changePagesCount(respons.data.totalCount);
            })
        }
    };

    render() {

        let pages = this.props.pagesCount.map((obj) => {
        return (
            <span   className={`${styles.pageNumber}  ${styles.currentPage}`}>{ obj }</span>
        );}
        );

        let users = this.props.usersData.map((obj, index) => {
            return <User className={styles.user}
                key={obj.id}
                id={obj.id}
                index={index}
                smallPhotos={obj.photos.small}
                usersImg={usersImg}
                followed={obj.followed}
                fullName={obj.name}W
                status={"obj.status"}
                location={obj.location}
                onChangeFollow={this.props.onChangeFollow} />;
        });
        // debugger;
        return (
            <div>
                <div className={styles.pagesCount}>
                    { pages }
                </div>
                { users}
            </div>
        )
    };
}

export default Users;