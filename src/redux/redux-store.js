import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sideBarReducer from "./sideBar_reducer";
import usersReducer from "./users_reducer";
import thunkMiddleware from "redux-thunk";

const headerReducer = combineReducers({
    auth: authReducer,
});



const contentsReducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    users: usersReducer,
});

const reducers = combineReducers({
    header: headerReducer,
    sideBar: sideBarReducer,
    contents: contentsReducers,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;