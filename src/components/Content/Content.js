import { BrowserRouter, Route } from "react-router-dom";
import Dialogs from "../contents/Dialogs/Dialogs";
import Profile from "../contents/Profile/Profile";
import style from "./Content.module.css";

function Contents(props) {
    return (
        <BrowserRouter>
            <section className={style.content + " " + props.className}>

                <Route path="/profile" component={Profile} />
                <Route path="/dialogs" component={Dialogs} />
                {/* 
            <Profile />
            <Dialogs /> */}
            </section>
        </BrowserRouter>
    );
};

export default Contents;