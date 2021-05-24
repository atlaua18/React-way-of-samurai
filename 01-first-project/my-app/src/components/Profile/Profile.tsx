import React from "react";
import { EmptyObject, Store } from "redux";
import { IAction } from "../../interfaces/IAction";
import { IMessagePage } from "../../interfaces/IMessagePage";
import { IProfilePage } from "../../interfaces/IProfilePage";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: {
    store: Store<
        EmptyObject & {
            profilePage: IProfilePage;
            messagePage: IMessagePage;
        },
        IAction
    >;
}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer
                store={props.store}
            />
        </div>
    );
};
