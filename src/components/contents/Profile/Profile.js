import MyPosts from "./MyPosts/MyPosts";
import profile from "./Profile.module.css";

function Profile() {
    return (
        <div className={profile.profile}>
            <div className={profile.banner}>
                <img  src="https://d2afajug0qougp.cloudfront.net/wp-content/uploads/2017/12/21215942/pexels-photo-250177-800x200.jpeg" alt="Новый год!!" />
            </div>

            <div className={profile.wrapInfo}>
                <div className={profile.avatar}><img src="https://archilab.online/images/1/123.jpg" alt="Cote" /></div>
    
                <div className={profile.info}>
                    <h2 className={profile.name}>Dmitry K.</h2>
                    <p className={profile.date}>Date of Birth: <span>2 january</span></p>
                    <p className={profile.address}>City: <span>Minsk</span></p>
                    <p className={profile.education}>DSU'11</p>
                    <p className={profile.site}>Web Site: <a href="google.com">google.com</a></p>
                </div>
            </div>

            <div className={profile.myPosts}><MyPosts /></div>
        </div>
    )
}

export default Profile;