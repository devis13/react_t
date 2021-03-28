import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";

function Navigation(props) {

    const navLink = props.navData.map((obj) => {
        return (<li className={style.elem}
                    key={ obj.id }>
            <NavLink    to={obj.path} 
                        id={obj.id} 
                        className={style.link} 
                        activeClassName={style.active}
            >
                {obj.title}
            </NavLink>
        </li>)
    })

    return (
        <section className={style.navBar + " " + props.className}>
            <ul className={style.list}>
                {navLink}
            </ul>
        </section>
    );
}

export default Navigation;