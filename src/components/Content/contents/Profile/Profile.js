import MyPostsContainer from "./MyPosts/MyPostsContainer";
import styles from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={ styles.profile + " " + props.className }>
            <ProfileInfo { ...props }/>
            <MyPostsContainer className={ styles.myPosts }/>
        </div>
    )
}

export default Profile;