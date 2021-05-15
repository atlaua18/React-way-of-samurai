import React from "react";
import { IPost } from "../../interfaces/IPost";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: {
    state: {
        postsData: IPost[];
    };
    addPost: (postText: string) => {
        newPost: IPost,
    };
}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    );
};
