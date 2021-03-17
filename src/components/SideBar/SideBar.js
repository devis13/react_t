import Friends from "./Friends/Friends";
import Navigation from "./Navigation/Navigation";
import styles from "./SideBar.module.css";


const SideBar = (props) => {
    const navState = props.state.navigation;
    const friendsState = props.state.friends;

    return (
        <div className={styles.sideBar + " " + props.className}>
            <Navigation className={styles.navigation} navData={ navState.navData }/>
            <Friends className={styles.friends} friendsDate={ friendsState.friendsDate }/>
        </div>
    )
}

export default SideBar;