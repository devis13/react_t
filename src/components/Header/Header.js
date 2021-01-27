import style from "./Header.module.css"

function Header() {
    return (
        <section className={style.header}>
            <img className={style.logo} src="https://www.flaticon.com/premium-icon/icons/svg/2585/2585182.svg" alt="Логотип" />
        </section>
    );
};

export default Header;
