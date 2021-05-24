import { IMessagePage } from "./IMessagePage";

export interface IDialogsProps {
    messagePage: IMessagePage;
    // newMessage: (messageText: string) => void;
    updateNewMessageText: (text: string) => void;
    sendMessage: () => void;
    // dispatch: (action: IAction) => void;
}