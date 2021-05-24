import { IAction } from "../interfaces/IAction";
import { IPost } from "../interfaces/IPost";
import { IProfilePage } from "../interfaces/IProfilePage";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postsData: [
        { id: 1, message: "Hi, how are you?", likesCount: 15 },
        { id: 2, message: "It's my first post", likesCount: 20 },
    ],
    newPostText: "",
}

export const profileReducer = (state: IProfilePage = initialState, action: IAction) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: IPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});
