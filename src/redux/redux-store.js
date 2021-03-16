import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs_reducer";
import profileReducer from "./profile_reducer";
import sideBarReducer from "./sideBar_reducer";

const contentsReducers = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
});

const reducers = combineReducers({
    sideBar: sideBarReducer,
    contents: contentsReducers,
});

let store = createStore(reducers);

export default store;