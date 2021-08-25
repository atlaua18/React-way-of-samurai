import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../Common/FormsControls/FormsControls";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
                {/* <input placeholder={"Login"} /> */}
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
                {/* <input placeholder={"Password"} /> */}
            </div>
            <div>
                <Field component={Input} name={"rememberme"} type={"checkbox"} /> Remember me
                {/* <input type={"checkbox"} /> Remember me */}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: "login" // это form не связано с тем, что в reduxStore
})(LoginForm)