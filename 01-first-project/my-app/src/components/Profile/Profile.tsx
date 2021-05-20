import React from "react";
import { IAction } from "../../interfaces/IAction";
import { IPost } from "../../interfaces/IPost";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: {
    profilePage: {
        postsData: IPost[];
        newPostText?: string;
    },
    // addPost: () => void,
    // updateNewPostText: (newText: string) => void,
    dispatch: (action: IAction) => void,
}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost}
            />
        </div>
    );
};
