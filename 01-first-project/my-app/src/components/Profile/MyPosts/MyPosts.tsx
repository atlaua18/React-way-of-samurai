import React from "react";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New posts</div>
            <div className={styles.posts}>
                <Post />
                <Post />
            </div>
        </div>
    );
};
