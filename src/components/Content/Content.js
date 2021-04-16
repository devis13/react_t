import { Route } from "react-router-dom";
// import Dialogs from "./contents/Dialogs/Dialogs";
import Music from "./contents/Music/Music";
import News from "./contents/News/News";
// import Profile from "./contents/Profile/Profile";
import Settings from "./contents/Settings/Settings";
import style from "./Content.module.css";
// import Users from "./contents/Users/Users";
import UsersContainer from "./contents/Users/UsersContainer";
import ProfileContainer from "./contents/Profile/ProfileContainer";
import Login from "./contents/Login/Login";
import DialogsContainer from "./contents/Dialogs/DialogsContainer";

function Contents(props) {
    const ProfileWrap   = () => <ProfileContainer className={ style.profile  }/>;
    const DialogsWrap   = () => <DialogsContainer className={ style.dialogs }/>;
    const MusicWrap     = () => <Music className={ style.music } />;
    const NewsWrap      = () => <News className={ style.news } />;
    const UsersWrap     = () => <UsersContainer className={ style.users } />;
    const SettingsWrap  = () => <Settings className={ style.settings } />;
    const LoginWrap     = () => <Login />


    return (
        <section className={style.content + " " + props.className}>
            <Route path="/profile/:userId?" render={ ProfileWrap } />
            <Route path="/dialogs" render={ DialogsWrap } />
            <Route path="/music" render={ MusicWrap } />
            <Route path="/news" render={ NewsWrap } />
            <Route path="/users" render={ UsersWrap } />
            <Route path="/settings" render={ SettingsWrap } />
            <Route path="/login" render={ LoginWrap } />
        </section>
    );
};

export default Contents;