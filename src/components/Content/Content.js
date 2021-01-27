import Profile from "../contents/Profile/Profile";
import style from "./Content.module.css";

function Contents() {
    return (
        <section className={style.content}>
            <Profile />
        </section>
    );
};

export default Contents;