import { IAction } from "../interfaces/IAction";
import { IPost } from "../interfaces/IPost";
import { IProfilePage } from "../interfaces/IProfilePage";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state: IProfilePage, action: IAction) => {
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
