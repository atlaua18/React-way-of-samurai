import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: {postsData: {id: number, message: string, likesCount: number}[]}) => {

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};
