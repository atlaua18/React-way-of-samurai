import React from "react";
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow,
    getUsers,
} from "../../redux/usersReducer";
import { Users } from "./Users";
import { Loader } from "../Loader/Loader";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/withAuthRedirect";

export class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNum) => {
        this.props.getUsers(pageNum, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingProgress={this.props.followingProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress,
    };
};

export default compose(connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsers,
}),withAuthRedirect)(UsersContainer);

// export default connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     getUsers,
// })(UsersContainer);


// было
// componentDidMount() {
    // this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // this.props.toggleIsFetching(true);
           
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
    //         //{params: {count: 40}}
    //         this.props.toggleIsFetching(false);
    //         this.props.setUsers(data.items);
    //         this.props.setTotalUsersCount(data.totalCount);
    //     });
// }

// onPageChanged = (pageNum: number) => {
    // this.props.getUsers(pageNum, this.props.pageSize);
    // this.props.setCurrentPage(pageNum);
    // this.props.toggleIsFetching(true);

    // usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
    //         //{params: {count: 40}}
    //         this.props.toggleIsFetching(false);
    //         this.props.setUsers(data.items);
    //     });
// };

// export default connect(mapStateToProps, {
    // follow,
    // unfollow,
    // setUsers,
    // setCurrentPage,
    // setTotalUsersCount,
    // toggleIsFetching,
    // toggleFollowingProgress,
    // getUsers,
// })(UsersContainer);





// let mapDispatchToProps = (dispatch: Dispatch) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId)); // вызов action creator, а не сам action
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users: IUsers[]) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNum: number) => {
//             dispatch(setCurrentPageAC(pageNum));
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     };
// };
