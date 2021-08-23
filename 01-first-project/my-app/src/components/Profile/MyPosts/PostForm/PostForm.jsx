import { Field, reduxForm } from "redux-form";
import { required } from "../../../../utils/validators/validators";

export const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Post"} name={"newPostText"} component={"textarea"} validate={[required]}/>
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
