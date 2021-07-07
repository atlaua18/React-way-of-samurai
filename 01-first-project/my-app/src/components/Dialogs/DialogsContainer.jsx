// import React from "react";
import { connect } from "react-redux";
import {
    sendMessageActionCreator,
    updateNewMessageTextActionCreator,
} from "../../redux/messageReducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { Dialogs } from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);

// let AuthRedirectComponent = (props: any) => {
//     if (!props.isAuth) {
//         return <Redirect to = "/login" />
//     };
//     return <Dialogs {...props}/>
// }

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);



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
