import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./dialogs.module.css";
import { Message } from "./Message/Message";

export const Dialogs = ( props: { dialogsData: { name: string, id: number }[], messagesData: { message: string }[] } ) => {

    let dialogElements = props.dialogsData.map((d) => (
        <DialogItem name={d.name} id={d.id} />
    ));

    let messageElements = props.messagesData.map((m) => (
        <Message message={m.message} />
    ));

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogElements}</div>
            <div className={styles.messages}>{messageElements}</div>
        </div>
    );
};
