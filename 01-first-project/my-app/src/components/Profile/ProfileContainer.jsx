import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getProfile } from "../../redux/profileReducer";
// import { withAuthRedirect } from "../hoc/withAuthRedirect";
import { Profile } from "./Profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;

        this.props.getProfile(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    };
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose(
    connect(mapStateToProps,  {getProfile} ),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps,  {getProfile} )(WithUrlDataContainerComponent);

// было 
// componentDidMount() {
    // let userId = this.props.match.params.userId;
    // axios
    //     .get(
    //         `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
    //     )
    //     .then((response) => {
    //         this.props.setUserProfile(response.data)
    //     });
// }