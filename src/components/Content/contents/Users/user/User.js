import { NavLink } from "react-router-dom";
import styles from "./User.module.scss";

const User = (props) => {
    return (
        <div className={styles.user + " " + props.className}>
            <div className={styles._center}>
                <NavLink to={`/profile/${props.id}`}>
                    <div className={ styles.avatarWrap }>
                        <img    className = { styles.avatarImg } 
                                src={ props.smallPhotos || props.usersImg } 
                                alt="userAvatar"/>
                    </div>
                </NavLink>
                <button  disabled={props.lockedSubscribeBtn.some(id => id === props.id)} onClick={() => { props.changeFollow(props.index, props.id, props.followed) }}
                        className={ styles.btn }>
                            { props.followed ? "Follow" : "Unfollow" }
                </button>
            </div>
            <div className={ styles.infoWrap }>
                <div className={ styles.leftBlock }>
                    <p className={ styles.name }>{ props.fullName }</p>
                    <p>{ props.status }</p>
                </div>

                <p className={ styles.location }>{ "props.location.country" },<br/> { "props.location.city" }</p>
            </div>
        </div>
    )
}

export default User;