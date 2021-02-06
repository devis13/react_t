import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation(props) {
    return (
        <section className={style.navBar + " " + props.className}>
            <ul className={style.list}>
                <li className={style.elem}><NavLink to="/profile" className={style.link} activeClassName={style.active}>Profile</NavLink></li>
                <li className={style.elem}><NavLink to="/dialogs" className={style.link} activeClassName={style.active}>Messages</NavLink></li>
                <li className={style.elem}><NavLink to="/news" className={style.link} activeClassName={style.active}>News</NavLink></li>
                <li className={style.elem}><NavLink to="/music" className={style.link} activeClassName={style.active}>Music</NavLink></li>
                <li className={style.elem}><NavLink to="/settings" className={style.link} activeClassName={style.active}>Settings</NavLink></li>
            </ul>
        </section>
    );
}

export default Navigation;