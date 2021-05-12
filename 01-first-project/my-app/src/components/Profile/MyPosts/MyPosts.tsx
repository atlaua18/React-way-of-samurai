import React from "react";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

let postsData = [
    {id: 1, message: "Hi, how are you?", likesCount: 15},
    {id: 2, message: "It's my first post", likesCount: 20},
];

let postsElements = postsData.map( p => <Post message={p.message} likesCount={p.likesCount} />);

export const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                { postsElements }
            </div>
        </div>
    );
};
