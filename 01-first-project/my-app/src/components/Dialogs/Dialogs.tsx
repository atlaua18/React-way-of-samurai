import React from "react";
import { IStore } from "../../interfaces/IStore";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messageReducer";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./dialogs.module.css";
import { Message } from "./Message/Message";

export const Dialogs = (props: {
    // messagePage: {
    //     dialogsData: IDialogsData[],
    //     messagesData: IMessagesData[],
    //     newMessageText?: string;
    // },
    // newMessage: (messageText: string) => void,
    // dispatch: (action: IAction) => void;
    store: IStore;
}) => {

    let state = props.store.getState().messagePage;

    // создание/генерация ава + имя(то,что слева)
    let dialogElements = state.dialogsData.map((d) => (
        <DialogItem N={d.name} Id={d.id} AVA={d.avatar} />
    ));

    // создание/генерация сообщений в диалоге(то,что справа)
    let messageElements = state.messagesData.map((m) => (
        <Message message={m.message} />
    ));

    // let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
    
    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e: any) => {
        // let text: string = newMessageElement?.current?.value ?? "";
        let text: string = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>{dialogElements}</div> {/*тут отрисовка ава + имя*/}
            <div className={styles.messages}>
                {messageElements} {/*тут отрисовка сообщений*/}
                <div className={styles.createMessage}>
                    <textarea
                    placeholder="Message"
                    onChange={onMessageChange} 
                    value={state.newMessageText} 
                    className={styles.typeMessage}>
                    </textarea>
                    <button onClick={sendMessage} className={styles.sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};
