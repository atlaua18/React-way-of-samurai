import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import state from "./redux/state";

// let dialogsData = [
//   { id: 1, name: "Nastya" },
//   { id: 2, name: "Vitaliq" },
//   { id: 3, name: "Mother" },
// ];

// let messagesData = [
//   { id: 1, message: "Hi" },
//   { id: 2, message: "Yo" },
//   { id: 3, message: "How are you?" },
// ];

// let postsData = [
//   { id: 1, message: "Hi, how are you?", likesCount: 15 },
//   { id: 2, message: "It's my first post", likesCount: 20 },
// ];

ReactDOM.render(
    <React.StrictMode>
        <App appState={state} /> {/*ДО state БЫЛО так: postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} */}
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
