import React from "react";
import { IMyPostsProps } from "../../../interfaces/IMyPostsProps";
// import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props: IMyPostsProps) => {

    let postsElements = props.postsData.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement?.current?.value ?? "";
        props.updateNewPostText(text);
        // props.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
};
