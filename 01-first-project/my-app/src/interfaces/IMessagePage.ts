import { IDialogsData } from "./IDialogsData";
import { IMessagesData } from "./IMessagesData";

export interface IMessagePage {
    dialogsData: IDialogsData[];
    messagesData: IMessagesData[];
    newMessageText?: string;
}