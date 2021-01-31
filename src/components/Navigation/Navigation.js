import style from "./Navigation.module.css";

function Navigation(props) {
    return (
        <section className={style.navBar + " " + props.className}>
            <ul className={style.list}>
                <li className={style.elem}><a href="#s" className="nav-bar__link">Profile</a></li>
                <li className={style.elem}><a href="#s" className="nav-bar__link">Messages</a></li>
                <li className={style.elem}><a href="#s" className="nav-bar__link">News</a></li>
                <li className={style.elem}><a href="#s" className="nav-bar__link">Music</a></li>
                <li className={style.elem}><a href="#s" className="nav-bar__link">Settings</a></li>
            </ul>
        </section>
    );
}

export default Navigation;