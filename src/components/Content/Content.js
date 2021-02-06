import { Route } from "react-router-dom";
import Dialogs from "./contents/Dialogs/Dialogs";
import Music from "./contents/Music/Music";
import News from "./contents/News/News";
import Profile from "./contents/Profile/Profile";
import Settings from "./contents/Settings/Settings";
import style from "./Content.module.css";

function Contents(props) {

    const ProfileWrap = (props) => {
        return (<Profile {...props} className={style.profile} />)
    };

    const DialogsWrap = (props) => {
        return (<Dialogs {...props} className={style.dialogs} />)
    };

    const MusicWrap = (props) => {
        return (<Music {...props} className={style.music} />)
    };

    const NewsWrap = (props) => {
        return (<News {...props} className={style.news} />)
    };

    const SettingsWrap = (props) => {
        return (<Settings {...props} className={style.settings} />)
    };


    return (
        <section className={style.content + " " + props.className}>
            <Route path="/profile" component={ProfileWrap} />
            <Route path="/dialogs" component={DialogsWrap} />
            <Route path="/music" component={MusicWrap} />
            <Route path="/news" component={NewsWrap} />
            <Route path="/settings" component={SettingsWrap} />
        </section>
    );
};

export default Contents;