import { IDialogsData } from "./IDialogsData";
import { IMessageData } from "./IMessageData";

export interface IMessagePage {
    dialogsData: IDialogsData[];
    messagesData: IMessageData[];
}