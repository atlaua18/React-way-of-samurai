import styles from "./messageform.module.css";
import { Field, reduxForm } from "redux-form";
import { Textarea } from './../../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLength = maxLengthCreator(10);

export const MessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name={"newMessageBody"}
                    placeholder={"Введите сообщение"}
                    validate={[required, maxLength]}
                />
                <button className={styles.sendMessage}>Send</button>
            </div>
        </form>
    );
};

export const MessageReduxForm = reduxForm({
    form: "dialogMessageForm"
})(MessageForm)

// let state = props.messagePage;

    // let onSendMessage = () => {
    //     props.sendMessage();
    // };
    // let onMessageChange = (e) => {
    //     let text = e.target.value;
    //     props.updateNewMessageText(text);
    //     // props.store.dispatch(updateNewMessageTextActionCreator(text));
    // };
// {
    /* <textarea
                    placeholder="Message"
                    onChange={onMessageChange}
                    value={state.newMessageText}
                    className={styles.typeMessage}
                ></textarea>
                <button onClick={onSendMessage} className={styles.sendMessage}>
                    Send
                </button> */
// }
