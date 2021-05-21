import React from "react";
import { IAction } from "../../interfaces/IAction";
import { IDialogsData } from "../../interfaces/IDialogsData";
import { IMessagesData } from "../../interfaces/IMessagesData";
import { sendMessageActionCreator } from "../../redux/state";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./dialogs.module.css";
import { Message } from "./Message/Message";

export const Dialogs = (props: {
    state: {
        dialogsData: IDialogsData[],
        messagesData: IMessagesData[],
    },
    // newMessage: (messageText: string) => void,
    dispatch: (action: IAction) => void,
}) => {

    // создание/генерация ава + имя(то,что слева)
    let dialogElements = props.state.dialogsData.map((d) => (
        <DialogItem N={d.name} Id={d.id} AVA={d.avatar} />
    ));

    // создание/генерация сообщений в диалоге(то,что справа)
    let messageElements = props.state.messagesData.map((m) => (
        <Message message={m.message} />
    ));

    let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
    
    let sendMessage = () => {
        let text: string = newMessageElement?.current?.value ?? "";
        props.dispatch(sendMessageActionCreator(text))
        // props.newMessage(text);
        if(newMessageElement.current !== null) {
            newMessageElement.current.value = "";
        }
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogElements}</div> {/*тут отрисовка ава + имя*/}
            <div className={styles.messages}>
                {messageElements} {/*тут отрисовка сообщений*/}
                <div className={styles.createMessage}>
                    <textarea ref={newMessageElement} className={styles.typeMessage}></textarea>
                    <button onClick={sendMessage} className={styles.sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};
