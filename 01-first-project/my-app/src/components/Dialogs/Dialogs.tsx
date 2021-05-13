import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./dialogs.module.css";
import { Message } from "./Message/Message";

export const Dialogs = ( props: {
    state: {
        dialogsData: { id: number, name: string, avatar: string }[], 
        messagesData: { message: string }[],
    } 
} ) => {

    let dialogElements = props.state.dialogsData.map((d) => (
        <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>
    ));

    let messageElements = props.state.messagesData.map((m) => (
        <Message message={m.message} />
    ));

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogElements}</div>
            <div className={styles.messages}>{messageElements}</div>
        </div>
    );
};
