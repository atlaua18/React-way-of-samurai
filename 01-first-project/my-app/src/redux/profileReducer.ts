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
};

export const profileReducer = (
    state: IProfilePage = initialState,
    action: IAction
) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: IPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0,
            };
            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});
