import React from "react";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { StoreContext } from "../../../StoreContext";
import { MyPosts } from "./MyPosts";

export const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                return (
                    <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        postsData={state.profilePage.postsData}
                        newPostText={state.profilePage.newPostText}
                    />
                );
            }}
        </StoreContext.Consumer>
    );
};
