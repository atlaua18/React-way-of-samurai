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
            let newPost: IPost = {
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
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
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
