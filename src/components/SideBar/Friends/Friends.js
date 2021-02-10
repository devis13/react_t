import Friend from "./Friend/Friend";
import styles from "./Friends.module.css";

const Friends = (props) => {

    const friendsDate = props.state.friendsDate.map((obj) => {
        return (<Friend className={styles.friend} 
                        id={obj.id}  
                        avatarPath={obj.avatarPath} 
                        name={obj.name} />)
    })

    return (
        <div className={styles.friends + " " + props.className}>
            <h2 className={styles.title}>Friends</h2>
            <div className={styles.friendsList}>
                {friendsDate}
            </div>
        </div>
    )
}

export default Friends;