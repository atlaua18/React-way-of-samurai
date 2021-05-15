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
import { IPost } from "./interfaces/IPost";
import { IAppState } from "./interfaces/IAppState";

const App = (props: {
    appState: IAppState,
    addPost: (postText: any) => {
        newPost: IPost,
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
                            <Profile state={props.appState.profilePage} addPost={props.addPost}/>
                        )}
                    />
                    <Route
                        path="/dialogs"
                        render={() => (
                            <Dialogs
                                state={props.appState.messagePage} // БЫЛО dialogsData={props.appState.dialogsData} messagesData={props.appState.messagesData}
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
