import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={ styles.profile + " " + props.className }>
            <ProfileInfo className={ styles.profileInfo } />
            <MyPosts    className={ styles.myPosts }
                        state={ props.state.myPosts }
                        dispatch={ props.dispatch } />
        </div>
    )
}

export default Profile;