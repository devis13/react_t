import User from "./user/User";
import styles from "./Users.module.scss"
import usersImg from "../../../../img/user-img.png";
import React from "react";
import Preloader from "../../../Preloader/Preloader";
import { Redirect } from "react-router";



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
            onChangeSubscriping={props.onChangeSubscriping}
            loading={props.loading}
            lockedSubscribeBtn={ props.lockedSubscribeBtn }/>;
    });

    // if(!props.isAuth) return <Redirect to="/login" />

    return (
        <div>
            <div className={styles.pagesCount}>
                {pages}
            </div>
            <div className={`${styles.preloaderWrap}  ${props.loading ? styles.preloaderWrapDB : null}` }>
                {props.loading ? <Preloader /> : null}
            </div>
            { users}
        </div>
    )
};

export default Users;