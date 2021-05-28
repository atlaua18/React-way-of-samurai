import { IActionUsers } from "../interfaces/IActionUsers";
import { IUsers } from "../interfaces/IUsers";
import { IUsersPage } from "../interfaces/IUsersPage";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState: IUsersPage = {
    users: [
        // {
        //     id: 1,
        //     avatarURL: "https://cdn.dribbble.com/users/15779/screenshots/15722163/media/e93bd27868f6d3d1cef98e7c833b2a90.png?compress=1&resize=1600x1200",
        //     followed: true,
        //     fullName: "Nastya",
        //     status: "I'm a boss",
        //     location: { city: "Saint-Petersburg", country: "Russia" },
        // },
        // {
        //     id: 2,
        //     avatarURL: "https://cdn.dribbble.com/users/15779/screenshots/15722163/media/e93bd27868f6d3d1cef98e7c833b2a90.png?compress=1&resize=1600x1200",
        //     followed: false,
        //     fullName: "Vitaliq",
        //     status: "Nastya a boss",
        //     location: { city: "Saint-Petersburg", country: "Russia" },
        // },
        // {
        //     id: 3,
        //     avatarURL: "https://cdn.dribbble.com/users/15779/screenshots/15722163/media/e93bd27868f6d3d1cef98e7c833b2a90.png?compress=1&resize=1600x1200",
        //     followed: true,
        //     fullName: "Dmitry",
        //     status: "Nastya a boss",
        //     location: { city: "Minsk", country: "Belarus" },
        // },
    ],
};

export const usersReducer = (state: IUsersPage = initialState, action: IActionUsers) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // такая запись users: [...state.users] идентична такой users: state.users.map ( u => u); и там и там копируется массив users
                users: state.users.map((u) => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            };

        case SET_USERS:
            debugger
            return {
                ...state,
                // users: [
                //     ...state.users,
                //     action.users?.map(u => {
                //         return u
                //     })
                // ]
                // users: state.users.map( u => {
                //     if(action.users === undefined) {
                //         return u;
                //     }
                //     return [ ...state.users, ...action.users];
                // }),
                users: [ ...action.users], //УБРАЛА ...state.users, (так как users сетались дважды)
            }
        default: 
            return state;
    }
};

export const followAC = (userId: number) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId: number) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users: IUsers[]) => ({ type: SET_USERS, users });