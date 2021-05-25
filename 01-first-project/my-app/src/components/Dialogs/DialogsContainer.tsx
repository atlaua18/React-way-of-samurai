import React from "react";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import { StoreContext } from "../../StoreContext";
import { Dialogs } from "./Dialogs";

export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().messagePage;

                let onSendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                };

                let onMessageChange = (text: string) => {
                    store.dispatch(
                        updateNewMessageTextActionCreator(text)
                    );
                };
                return (
                    <Dialogs
                        updateNewMessageText={onMessageChange}
                        sendMessage={onSendMessage}
                        messagePage={state}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};

// let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
// let text: string = newMessageElement?.current?.value ?? "";
