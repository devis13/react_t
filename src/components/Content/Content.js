import Profile from "../contents/Profile/Profile";
import style from "./Content.module.css";

function Contents(props) {
    return (
        <section className={style.content + " " + props.className}>
            <Profile />
        </section>
    );
};

export default Contents;