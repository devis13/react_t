import User from "./user/User";
import styles from "./Users.module.css"
import usersImg from "../../../../img/user-img.png";


const Users = (props) => {
    const usersData = [
        {
            id: 1,
            usersImg: usersImg,
            followed: true,
            fullName: "Dmitry",
            status: "I am looking for a Job right now...",
            location: {
                country: "Belarus",
                city: "Minsk"
            }
        },
        {
            id: 2,
            usersImg: usersImg,
            followed: false,
            fullName: "Swetlana",
            status: "I am so pretty",
            location: {
                country: "Belarus",
                city: "Minsk"
            }
        },
        {
            id: 3,
            usersImg: usersImg,
            followed: true,
            fullName: "Sergei",
            status: "I like football!!!",
            location: {
                country: "Ukraine",
                city: "Kiev"
            }
        },
        {
            id: 4,
            usersImg: usersImg,
            followed: true,
            fullName: "Andrew",
            status: "I am free to help you to create good Video Production",
            location: {
                country: "Russia",
                city: "Moscow"
            }
        },
        
    ];

    if (props.usersState.usersData.length === 0) {
        props.createState(usersData);
    }

    let users = props.usersData.map((obj, index) => {
        return <User    className={ styles.user }
                        id={ obj.id }
                        index={ index }
                        usersImg={ obj.usersImg }
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