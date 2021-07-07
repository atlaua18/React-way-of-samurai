import React from "react";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {

    let postsElements = props.postsData.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    ));

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea 
                    placeholder="Post"
                    onChange={onPostChange} 
                    value={props.newPostText}></textarea>
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
