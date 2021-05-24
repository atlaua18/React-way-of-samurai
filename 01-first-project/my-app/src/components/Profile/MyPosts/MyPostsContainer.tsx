import React from "react";
import { IReduxStore } from "../../../interfaces/IReduxStore";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = (props: IReduxStore) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text));
        // props.store.reduxStore.
    };

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            postsData={state.profilePage.postsData}
            newPostText={state.profilePage.newPostText}
        />
    );
};
