import React from "react";
import { IProfile } from "../../interfaces/IProfile";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props: {profile: IProfile | null}) => {
debugger;
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer
                // store={props.store}
            />
        </div>
    );
};

// props: {
//     store: Store<
//         EmptyObject & {
//             profilePage: IProfilePage;
//             messagePage: IMessagePage;
//         },
//         IAction
//     >;
// }
