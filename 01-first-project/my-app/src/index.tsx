import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import store from "./redux/state";
// import { addPost } from "./redux/state";
// import { rerenderEntireTree } from "./render";
// import { sendMessage } from "./redux/state";
// import { updateNewPostText } from "./redux/state";
// import { subscribe } from "./redux/state";
import { IAppState } from "./interfaces/IAppState";

let rerenderEntireTree = (state: IAppState) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                appState={state}
                dispatch={store.dispatch.bind(store)}
                // addPost={store.addPost.bind(store)}
                // updateNewPostText={store.updateNewPostText.bind(store)}
                // newMessage={store.sendMessage.bind(store)}
            />{" "}
            {/*ДО state БЫЛО так: postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} */}
        </React.StrictMode>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// ReactDOM.render(
//     <React.StrictMode>
//         <App appState={state} addPost={addPost} /> {/*ДО state БЫЛО так: postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} */}
//     </React.StrictMode>,
//     document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
