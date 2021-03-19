import FriendsContainer from "./Friends/FriendsContainer";
import NavigationContainer from "./Navigation/NavigationContainer";
import styles from "./SideBar.module.css";


const SideBar = (props) => {
    return (
        <div className={styles.sideBar + " " + props.className}>
            <NavigationContainer className={styles.navigation}/>
            <FriendsContainer className={styles.friends}/>
        </div>
    )
}

export default SideBar;