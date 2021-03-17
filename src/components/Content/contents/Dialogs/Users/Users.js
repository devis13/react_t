import User from "./User/User";
import styles from "./Users.module.css";

const Users = (props) => {

    const user = props.userData.map((obj) => <User  name={obj.name}
                                                    id={obj.id} 
                                                    className={styles.item}/> )

    return (
        <div className={styles.users + " " + props.className}>
            {user}
        </div>
    )
}

export default Users;