import { connect } from "react-redux";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { MyPosts } from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
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
