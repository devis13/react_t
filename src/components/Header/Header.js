import style from "./Header.module.css"

function Header(props) {
    return (
        <section className={style.header  + " " + props.className}>
            <img    className={style.logo}
                    src="https://www.flaticon.com/premium-icon/icons/svg/2585/2585182.svg"
                    alt="Логотип" />
        </section>
    );
};

export default Header;
