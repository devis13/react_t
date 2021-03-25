import styles from "./User.module.scss";

const User = (props) => {

    const onClick = () => {
        props.onChangeFollow(props.index);
    }

    return (
        <div className={styles.user + " " + props.className}>
            <div className={styles._center}>
                <div className={ styles.avatarWrap }><img className = { styles.avatarImg } src={ props.usersImg } alt="userAvatar"/></div>
                <button onClick={onClick}
                        className={ styles.btn }>
                            { props.followed ? "Follow" : "Unfollow" }
                </button>
            </div>
            <div className={ styles.infoWrap }>
                <div className={ styles.leftBlock }>
                    <p className={ styles.name }>{ props.fullName }</p>
                    <p>{ props.status }</p>
                </div>

                <p className={ styles.location }>{ props.location.country },<br/> { props.location.city }</p>
            </div>
        </div>
    )
}

export default User;