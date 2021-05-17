import React from "react";
import { IPost } from "../../interfaces/IPost";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: {
    profilePage: {
        postsData: IPost[];
        newPostText: string;
    },
    addPost: () => {
        newPost: IPost;
    },
    updateNewPostText: (newText: string) => {},
}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts
                postsData={props.profilePage.postsData}
                newPostText={props.profilePage.newPostText}
                updateNewPostText={props.updateNewPostText}
                addPost={props.addPost}
            />
        </div>
    );
};
