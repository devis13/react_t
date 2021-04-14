import Preloader from "../../../../Preloader/Preloader";
import styles from "./ProfileInfo.module.scss";

function ProfileInfo(props) {
    if(!props.profileData) return <div></div>;
    // debugger;

    const contacts = props.profileData.contacts;

    let onClick = () => {
        // debugger;
        props.changeHiddenContacts();
    }

    return (
        <div className={styles.profileInfo + " " + props.className}>
            <div className={`${styles.preloaderWrap}  ${props.loading ? styles.preloaderWrapDB : null}` }>
                {props.loading ? <Preloader/> : null }
            </div>
            <div className={styles.banner}>
                <img  src="https://d2afajug0qougp.cloudfront.net/wp-content/uploads/2017/12/21215942/pexels-photo-250177-800x200.jpeg" alt="Новый год!!" />
            </div>

            <div className={styles.wrapInfo}>
                <div className={styles.avatar}><img src={props.profileData.photos.large}alt="Cote" /></div>
    
                <div className={styles.info}>
                    <h2 className={styles.name}>{ props.profileData.fullName }</h2>
                    <p className={styles.aboutMe}>{props.profileData.aboutMe}</p>
                    <p className={styles.date}>Date of Birth: <span>2 january</span></p>
                    <p className={styles.address}>City: <span>Minsk</span></p>
                    <p className={styles.education}>DSU'11</p>

                    <p className={styles.jobStatus}>{props.profileData.lookingForAJob ? "Looking for a job..." : "I have a job!"}</p>
                    <p className={styles.jobStatusDescriptions}>Description:  {props.profileData.lookingForAJobDescription}</p>

                    <button onClick={onClick} className={styles.button}>Contacts:</button>

                    <ul className={`${styles.siteList} ${ !props.hiddenContacts ? styles._hideDisplay : null}`}>
                        <li>Facebook: <a href={ contacts.facebook }>{ contacts.facebook }</a></li>
                        <li>Website: <a href={ contacts.website }>{ contacts.website }</a></li>
                        <li>Vk: <a href={ contacts.vk }>{ contacts.vk }</a></li>
                        <li>Twitter: <a href={ contacts.twitter }>{ contacts.twitter }</a></li>
                        <li>Instagram: <a href={ contacts.instagram }>{ contacts.instagram }</a></li>
                        <li>Youtube: <a href={ contacts.youtube }>{ contacts.youtube }</a></li>
                        <li>Github: <a href={ contacts.github }>{ contacts.github }</a></li>
                        <li>MainLink: <a href={ contacts.mainLink }>{ contacts.mainLink }</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;