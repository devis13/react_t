import { Route } from "react-router-dom";
import Dialogs from "./contents/Dialogs/Dialogs";
import Music from "./contents/Music/Music";
import News from "./contents/News/News";
import Profile from "./contents/Profile/Profile";
import Settings from "./contents/Settings/Settings";
import style from "./Content.module.css";

function Contents(props) {
    // debugger;

    const ProfileWrap = () => {
        return (<Profile    className={style.profile}
                            state={props.state.profile}/>)
    };

    // userDate={props.userDate}
    // messageDate={props.messageDate}

    const DialogsWrap = () => {
        return (<Dialogs    className={style.dialogs} 
                            state={props.state.dialogs}/>)
    };

    const MusicWrap = () => {
        return (<Music className={style.music} />)
    };

    const NewsWrap = () => {
        return (<News className={style.news} />)
    };

    const SettingsWrap = () => {
        return (<Settings className={style.settings} />)
    };


    return (
        <section className={style.content + " " + props.className}>
            <Route path="/profile" render={ProfileWrap} />
            <Route path="/dialogs" render={DialogsWrap} />
            <Route path="/music" render={MusicWrap} />
            <Route path="/news" render={NewsWrap} />
            <Route path="/settings" render={SettingsWrap} />
        </section>
    );
};

export default Contents;