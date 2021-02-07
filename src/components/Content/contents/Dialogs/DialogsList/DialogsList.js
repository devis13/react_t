import Dialog from "./Dialog/Dialog";
import styles from "./DialogsList.module.css";

const DialogsList = (props) => {

    const dialogDate = [
        {name:"Andrey", id:"1"},
        {name:"Ivan", id:"2" },
        {name:"Tymur", id:"3"},
        {name:"Roman", id:"4"},
    ]

    return (
        <div className={styles.dialogsList + " " + props.className}>
            <Dialog name={dialogDate[0].name} id={dialogDate[0].id} className={styles.item}/>
            <Dialog name={dialogDate[1].name} id={dialogDate[1].id} className={styles.item}/>
            <Dialog name={dialogDate[2].name} id={dialogDate[2].id} className={styles.item}/>
            <Dialog name={dialogDate[3].name} id={dialogDate[3].id} className={styles.item}/>
        </div>
    )
}

export default DialogsList;