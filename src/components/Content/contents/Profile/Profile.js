import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={ styles.profile + " " + props.className }>
            <ProfileInfo className={ styles.profileInfo } />
            <MyPostsContainer className={ styles.myPosts } store={ props.store } />
        </div>
    )
}

export default Profile;