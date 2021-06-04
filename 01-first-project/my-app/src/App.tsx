import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Music } from "./components/Music/Music";
import { Settings } from "./components/Settings/Settings";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                    <Route
                        path="/dialogs"
                        render={() => <DialogsContainer />}
                    />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

// props: {
// appState: IAppState;
// dispatch: Dispatch<IAction>;
// store: Store<
//     EmptyObject & {
//         profilePage: IProfilePage;
//         messagePage: IMessagePage;
//     },
//     IAction
// >;
// }
