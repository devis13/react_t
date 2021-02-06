import Dialog from "./Dialog/Dialog";
import styles from "./DialogsList.module.css";

const DialogsList = (props) => {
    return (
        <div className={styles.dialogsList + " " + props.className}>
            <Dialog name="Andrey" id="1" className={styles.item}/>
            <Dialog name="Ivan" id="2" className={styles.item}/>
            <Dialog name="Tymur" id="3" className={styles.item}/>
            <Dialog name="Roman" id="4" className={styles.item}/>
        </div>
    )
}

export default DialogsList;