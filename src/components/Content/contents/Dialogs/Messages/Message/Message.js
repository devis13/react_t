import styles from "./Message.module.css";

const Message = (props) => {

    const messageWrap = " " + props.className;

    const messageClass = props.avtor ? 
                            styles.avtorMessage + messageWrap:
                            styles.message + messageWrap;

    return (
        <div className={messageClass}>
            <img src={props.avatarPath} alt="" className={styles.avatar}/>
            {/* <div className={styles.avatar}></div> */}
            <p className={styles.text}>{props.text}</p>
        </div>
    )
}

export default Message;