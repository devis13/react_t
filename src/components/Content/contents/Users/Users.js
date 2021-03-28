import * as axios from "axios";
import User from "./user/User";
import styles from "./Users.module.css"
import usersImg from "../../../../img/user-img.png";

const Users = (props) => {
    if (props.usersState.usersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then((respons) => {
                    props.createState(respons.data.items);
                })
    }

    let users = props.usersData.map((obj, index) => {
        return <User    className={ styles.user }
                        key={ obj.id }
                        id={ obj.id }
                        index={ index }
                        smallPhotos={ obj.photos.small }
                        usersImg={ usersImg }
                        followed= { obj.followed }
                        fullName={ obj.fullName }
                        status={ obj.status }
                        location={ obj.location } 
                        onChangeFollow={ props.onChangeFollow }/>;
    });

    return (
        <div>
            { users }
        </div>
    )
}

export default Users;