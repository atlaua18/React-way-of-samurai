import { Field, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../../utils/validators/validators";
import { Textarea } from "../../../Common/FormsControls/FormsControls";

const maxLength = maxLengthCreator(10);

export const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Текст поста"} name={"newPostText"} component={Textarea} validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

export const AddNewPostReduxForm = reduxForm({ form: "ProfileAddNewPostForm" })(
    AddNewPostForm
);
