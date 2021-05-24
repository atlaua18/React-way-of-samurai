import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { IAppState } from "./interfaces/IAppState";
import { IAction } from "./interfaces/IAction";
import { Dispatch, EmptyObject, Store } from "redux";
import { IProfilePage } from "./interfaces/IProfilePage";
import { IMessagePage } from "./interfaces/IMessagePage";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";

const App = (props: {
    appState: IAppState;
    dispatch: Dispatch<IAction>;
    store: Store<
        EmptyObject & {
            profilePage: IProfilePage;
            messagePage: IMessagePage;
        },
        IAction
    >;
}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route
                        path="/profile"
                        render={() => <Profile store={props.store} />}
                    />
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer store={props.store} />}
                    />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
