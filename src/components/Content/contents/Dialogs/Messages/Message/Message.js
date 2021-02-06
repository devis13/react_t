import styles from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={styles.message + " " + props.className}>
            {props.text}
        </div>
    )
}

export default Message;