import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../interfaces/IAppState";
import { IHeaderContainerProps } from "../../interfaces/IHeaderContainerProps";
import { getAuthUserData } from "../../redux/authReducer";
import Header from "./Header";

export class HeaderContainer extends React.Component<
    IHeaderContainerProps,
    {}
> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state: IAppState) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);

// было
// componentDidMount() {
//     this.props.getAuthUserData();
    
    // axios
    //     .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //         withCredentials: true,
    //     })
    //     .then((response) => {
    //         if (response.data.resultCode === 0) {
    //             let { id, email, login } = response.data.data;
    //             this.props.setAuthUserData(id, email, login);
    //         }
    //     });
// }