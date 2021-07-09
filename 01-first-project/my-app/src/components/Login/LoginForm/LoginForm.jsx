import { Field, reduxForm } from "redux-form";

export const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
                {/* <input placeholder={"Login"} /> */}
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
                {/* <input placeholder={"Password"} /> */}
            </div>
            <div>
                <Field component={"input"} name={"rememberme"} type={"checkbox"} /> Remember me
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