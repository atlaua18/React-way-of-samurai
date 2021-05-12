import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./dialogs.module.css";
import { Message } from "./Message/Message";

let dialogsData = [
    {id: 1, name: "Nastya"},
    {id: 2, name: "Vitaliq"},
    {id: 3, name: "Mother"},
];

let messagesData = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Yo"},
    {id: 3, message: "How are you?"},
];

let dialogElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id} />);

let messageElements = messagesData.map( m => <Message message={m.message} />);

export const Dialogs = (props: {}) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                { dialogElements }
            </div>
            <div className={styles.messages}>
                { messageElements }
            </div>
        </div>
    );
};