import AuthContainer from "./Auth/AuthContainer"
import style from "./Header.module.scss"

function Header(props) {
    return (
        <section className={style.header  + " " + props.className}>
            <img    className={style.logo}
                    src="https://www.flaticon.com/premium-icon/icons/svg/2585/2585182.svg"
                    alt="Логотип" />
            <AuthContainer/>
        </section>
    );
};

export default Header;
