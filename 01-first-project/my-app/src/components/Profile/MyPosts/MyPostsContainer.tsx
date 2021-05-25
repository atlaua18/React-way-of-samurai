// import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IAction } from "../../../interfaces/IAction";
import { IAppState } from "../../../interfaces/IAppState";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

let mapStateToProps = (state: IAppState) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch: Dispatch<IAction>) => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

// export const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };

//                 let onPostChange = (text: string) => {
//                     store.dispatch(updateNewPostTextActionCreator(text));
//                 };

//                 return (
//                     <MyPosts
//                         updateNewPostText={onPostChange}
//                         addPost={addPost}
//                         postsData={state.profilePage.postsData}
//                         newPostText={state.profilePage.newPostText}
//                     />
//                 );
//             }}
//         </StoreContext.Consumer>
//     );
// };
