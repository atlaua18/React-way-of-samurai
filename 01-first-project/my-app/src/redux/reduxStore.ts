import { combineReducers, createStore } from "redux";
import { authReducer } from "./authReducer";
import { messageReducer } from "./messageReducer";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

export default store;