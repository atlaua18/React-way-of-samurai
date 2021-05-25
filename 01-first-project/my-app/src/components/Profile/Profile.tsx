import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = () => {
    return (
        <div>
            <ProfileInfo />
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
