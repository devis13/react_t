import styles from "./Friend.module.css";

const Friend = (props) => {

    return (
        <div className={styles.friend + " " + props.className}>
            <img src={props.avatarPath} alt="ava" className={styles.avatar} />
            <p className={styles.name}>{props.name}</p>
        </div>
    )
}

export default Friend;