import React from "react";
import { EmptyObject, Store } from "redux";
import { IAction } from "../../interfaces/IAction";
import { IMessagePage } from "../../interfaces/IMessagePage";
import { IProfilePage } from "../../interfaces/IProfilePage";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messageReducer";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = (props: {
    // messagePage: {
    //     dialogsData: IDialogsData[],
    //     messagesData: IMessagesData[],
    //     newMessageText?: string;
    // },
    // newMessage: (messageText: string) => void,
    // dispatch: (action: IAction) => void;
    store: Store<
        EmptyObject & {
            profilePage: IProfilePage;
            messagePage: IMessagePage;
        },
        IAction
    >;
}) => {

    let state = props.store.getState().messagePage;
   
    let onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange} sendMessage={onSendMessage} messagePage={state}/>
    );
};

// let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
// let text: string = newMessageElement?.current?.value ?? "";