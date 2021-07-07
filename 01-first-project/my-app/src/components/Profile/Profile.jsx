import React from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const Profile = (props) => {

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
