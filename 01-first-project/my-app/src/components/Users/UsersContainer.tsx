import React from "react";
import { connect } from "react-redux";
import { IAppState } from "../../interfaces/IAppState";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    toggleFollowingProgress
} from "../../redux/usersReducer";
import { Users } from "./Users";
import { IUsersContainerProps } from "../../interfaces/IUsersContainerProps";
import { Loader } from "../Loader/Loader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component<IUsersContainerProps> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
               
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                //{params: {count: 40}}
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(pageNum, this.props.pageSize).then(data => {
                //{params: {count: 40}}
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
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
                    followAPI={this.props.followAPI}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingProgress={this.props.followingProgress}
                />
            </>
        );
    }
}

let mapStateToProps = (state: IAppState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingInProgress,
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,
})(UsersContainer);

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
