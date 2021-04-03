import User from "./user/User";
import styles from "./Users.module.scss"
import usersImg from "../../../../img/user-img.png";
import React from "react";


const Users = (props) => {

    let pages = props.pagesCount.map((val) => {
        return (
            <button key={ val } onClick={e => props.onClick(val, e)} className={`${styles.pageNumber}  ${props.currentPage === val && styles.currentPage}`}>{val}</button>
        );
    }
    );

    let users = props.usersData.map((obj, index) => {
        return <User className={styles.user}
            key={obj.id}
            id={obj.id}
            index={index}
            smallPhotos={obj.photos.small}
            usersImg={usersImg}
            followed={obj.followed}
            fullName={obj.name} W
            status={"obj.status"}
            location={obj.location}
            onChangeFollow={props.onChangeFollow} />;
    });
    // debugger;
    return (
        <div>
            <div className={styles.pagesCount}>
                {pages}
            </div>
            { users}
        </div>
    )
};

export default Users;