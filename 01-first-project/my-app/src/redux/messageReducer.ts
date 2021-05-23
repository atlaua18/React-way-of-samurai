import { IAction } from "../interfaces/IAction";
import { IMessagePage } from "../interfaces/IMessagePage";
import { IMessagesData } from "../interfaces/IMessagesData";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const messageReducer = (state: IMessagePage, action: IAction) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage: IMessagesData = {
                id: 5,
                message: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.messageText;
            return state;
        default:
            return state;
    }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: text,
});
