import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
    ],
    newPostText: "",
    profile: null,
};

export const profileReducer = (state = initialState, action) => {
    function getId() {
        let id = 0;
        for (let i = state.postsData.length - 1; i > 0; i++) {
            id = state.postsData[i].id + 1;
            console.log(id);
            break;
        }
        return id;
    }

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: getId(),
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",
            };
        }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };

        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

//thunk
export const getProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};
