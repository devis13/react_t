import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    // debugger;
    return (
        <div className={styles.profile + " " + props.className}>
            <ProfileInfo className={styles.profileInfo}/>
            <MyPosts    className={styles.myPosts} 
                        state={props.state.myPosts}
                        addPost={props.addPost}/>
        </div>
    )
}

export default Profile;