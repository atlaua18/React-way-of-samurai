import React from "react";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./dialogs.module.css";
import { Message } from "./Message/Message";

export const Dialogs = (props: {
    state: {
        dialogsData: { id: number; name: string; avatar: string }[];
        messagesData: { message: string }[];
    };
}) => {
    let dialogElements = props.state.dialogsData.map((d) => (
        <DialogItem name={d.name} id={d.id} avatar={d.avatar} />
    ));

    let messageElements = props.state.messagesData.map((m) => (
        <Message message={m.message} />
    ));

    let newMessageElement: any = React.createRef();

    let SendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogElements}</div>
            <div className={styles.messages}>
                {messageElements}
                <div className={styles.createMessage}>
                    <textarea ref={newMessageElement} className={styles.typeMessage}></textarea>
                    <button onClick={SendMessage} className={styles.sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};
