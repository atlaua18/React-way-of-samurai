// import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "../../interfaces/IAppState";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import { Dialogs } from "./Dialogs";

let mapStateToProps = (state: IAppState) => {
    return {
        messagePage: state.messagePage,
    }
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



// export const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().messagePage;

//                 let onSendMessage = () => {
//                     store.dispatch(sendMessageActionCreator());
//                 };

//                 let onMessageChange = (text: string) => {
//                     store.dispatch(
//                         updateNewMessageTextActionCreator(text)
//                     );
//                 };
//                 return (
//                     <Dialogs
//                         updateNewMessageText={onMessageChange}
//                         sendMessage={onSendMessage}
//                         messagePage={store.getState().messagePage}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };

// let newMessageElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();
// let text: string = newMessageElement?.current?.value ?? "";
