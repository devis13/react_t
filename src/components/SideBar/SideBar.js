import Friends from "./Friends/Friends";
import Navigation from "./Navigation/Navigation";
import styles from "./SideBar.module.css";


const SideBar = (props) => {
    return (
        <div className={styles.sideBar + " " + props.className}>
            <Navigation className={styles.navigation} state={props.state.navigation}/>
            <Friends className={styles.friends} state={props.state.friends}/>
        </div>
    )
}

export default SideBar;