import styles from "./Dialogs.module.css";
import DialogsList from "./DialogsList/DialogsList";
import Messages from "./Messages/Messages";

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs + " " + props.className}>
            <DialogsList className={styles.list} />
            <Messages className={styles.messages} />
        </div>
    )
}

export default Dialogs;