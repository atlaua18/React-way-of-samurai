import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { IAppState } from "../../interfaces/IAppState";
import { IProfileContainerProps } from "../../interfaces/IProfileContainerProps";
import { setUserProfile } from "../../redux/profileReducer";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component<IProfileContainerProps & RouteComponentProps<{userId: string}>> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
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

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps,  {setUserProfile} )(WithUrlDataContainerComponent);
