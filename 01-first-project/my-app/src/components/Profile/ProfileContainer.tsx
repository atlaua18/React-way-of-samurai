import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../interfaces/IAppState";
import { IProfileContainerProps } from "../../interfaces/IProfileContainerProps";
import { setUserProfile } from "../../redux/profileReducer";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component<IProfileContainerProps> {

    componentDidMount() {
        debugger
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/2`
            )
            .then((response) => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
};

let mapStateToProps = (state: IAppState) => ({
    profile: state.profilePage.profile,
});

export default connect(mapStateToProps,  {setUserProfile} )(ProfileContainer);
