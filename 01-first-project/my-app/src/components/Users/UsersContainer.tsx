// import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAppState } from "../../interfaces/IAppState";
import { IUsers } from "../../interfaces/IUsers";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import { Users } from "./Users";

let mapStateToProps = (state: IAppState) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);