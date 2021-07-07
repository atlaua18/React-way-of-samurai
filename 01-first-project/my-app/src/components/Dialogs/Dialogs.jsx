import React from "react";
// import { Redirect } from "react-router-dom";
import { DialogItem } from "./DialogItem/DialogItem";
import styles from "./dialogs.module.css";
import { Message } from "./Message/Message";

export const Dialogs = (props) => {

    let state = props.messagePage;

    // создание/генерация ава + имя(то,что слева)
    let dialogElements = state.dialogsData.map((d) => (
        <DialogItem N={d.name} Id={d.id} AVA={d.avatar} key={d.id}/>
    ));

    // создание/генерация сообщений в диалоге(то,что справа)
    let messageElements = state.messagesData.map((m) => (
        <Message message={m.message} key={m.id}/>
    ));
   
    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text);
        // props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    // if (!props.isAuth) {
    //     return <Redirect to = "/login" />
    // };

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
                    <button onClick={onSendMessage} className={styles.sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

// let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
// let text: string = newMessageElement?.current?.value ?? "";