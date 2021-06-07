import { IActionUsers } from "../interfaces/IActionUsers";
import { IUsers } from "../interfaces/IUsers";
import { IUsersPage } from "../interfaces/IUsersPage";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState: IUsersPage = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

export const usersReducer = (
    state: IUsersPage = initialState,
    action: IActionUsers
) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // такая запись users: [...state.users] идентична такой users: state.users.map ( u => u); и там и там копируется массив users
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };

        case SET_USERS:
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
                users: action.users, //УБРАЛА ...state.users, (так как users сетались дважды)
            };

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            };
        }

        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUsersCount: action.count,
            };

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_IS_FOLLOWING_PROGRESS: 
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId) //возвращает копию массива, поэтому не нужна деструктуризация: [...state.followingInProgress, action.userId]  
            }    

        default:
            return state;
    }
};

export const follow = (userId: number) => ({ type: FOLLOW, userId });
export const unfollow = (userId: number) => ({ type: UNFOLLOW, userId });
export const setUsers = (users: IUsers[]) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalCount,
});
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
});

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
