import User from "./user/User";
import styles from "./Users.module.css"

const Users = (props) => {

    const users = props.usersData.map((obj, index) => {
        return <User    className={styles.user}
                        id={ obj.id }
                        index={index}
                        usersImg={ obj.usersImg }
                        followed= { obj.followed }
                        fullName={ obj.fullName }
                        status={ obj.status }
                        location={obj.location} 
                        onChangeFollow={props.onChangeFollow}/>;
    });

    return (
        <div>
            { users }
        </div>
    )
}

export default Users;