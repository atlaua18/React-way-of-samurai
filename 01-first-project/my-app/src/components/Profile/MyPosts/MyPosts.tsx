import React from "react";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New posts</div>
            <div className={styles.posts}>
                <Post message="Hi, how are you?" likesCount="15"/>
                <Post message="It's my first post" likesCount="20"/>
            </div>
        </div>
    );
};
