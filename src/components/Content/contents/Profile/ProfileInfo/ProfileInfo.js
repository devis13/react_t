import styles from "./ProfileInfo.module.css";

function ProfileInfo(props) {
    return (
        <div className={styles.profileInfo + " " + props.className}>
            <div className={styles.banner}>
                <img  src="https://d2afajug0qougp.cloudfront.net/wp-content/uploads/2017/12/21215942/pexels-photo-250177-800x200.jpeg" alt="Новый год!!" />
            </div>

            <div className={styles.wrapInfo}>
                <div className={styles.avatar}><img src="https://archilab.online/images/1/123.jpg" alt="Cote" /></div>
    
                <div className={styles.info}>
                    <h2 className={styles.name}>Dmitry K.</h2>
                    <p className={styles.date}>Date of Birth: <span>2 january</span></p>
                    <p className={styles.address}>City: <span>Minsk</span></p>
                    <p className={styles.education}>DSU'11</p>
                    <p className={styles.site}>Web Site: <a href="google.com">google.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;