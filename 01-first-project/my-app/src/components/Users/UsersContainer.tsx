import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "../../interfaces/IAppState";
import { IUsers } from "../../interfaces/IUsers";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import axios from "axios";
import { Users } from "./Users";
import { IUsersContainerProps } from "../../interfaces/IUsersContainerProps";

class UsersContainer extends React.Component<IUsersContainerProps> {
    
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                //{params: {count: 40}}
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    };

    onPageChanged = (pageNum: number) => {
        this.props.setCurrentPage(pageNum);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then((response) => {
                //{params: {count: 40}}
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return (
            <Users 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            />
        )
    }
}

let mapStateToProps = (state: IAppState) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
};

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: IUsers[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNum: number) => {
            dispatch(setCurrentPageAC(pageNum));
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

