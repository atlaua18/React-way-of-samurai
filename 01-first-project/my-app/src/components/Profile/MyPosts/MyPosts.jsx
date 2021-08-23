import React from "react";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";
import { AddNewPostReduxForm } from "./PostForm/PostForm";

export const MyPosts = (props) => {

    let postsElements = props.postsData.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    ));

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    // let onPostChange = (e) => {
    //     let text = e.target.value;
    //     props.updateNewPostText(text);
    // };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostReduxForm onSubmit={onAddPost}/>
            {/* <form>
                <div>
                    <textarea 
                    placeholder="Post"
                    onChange={onPostChange} 
                    value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </form> */}
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
};
