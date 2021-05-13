import React from "react";
import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";

const App = (props: {
    appState: {
        profilePage: {
            postsData: { id: number; message: string; likesCount: number }[];
        };
        MessagePage: {
            dialogsData: { id: number, name: string, avatar: string }[];
            messagesData: { message: string }[];
        };
    };
}) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route
                        path="/profile"
                        render={() => (
                            <Profile state={props.appState.profilePage} />
                        )}
                    />
                    <Route
                        path="/dialogs"
                        render={() => (
                            <Dialogs
                                state={props.appState.MessagePage} // БЫЛО dialogsData={props.appState.dialogsData} messagesData={props.appState.messagesData}
                            />
                        )}
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
