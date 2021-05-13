import React from "react";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props: {
    postsData: { id: number; message: string; likesCount: number }[];
}) => {
    let postsElements = props.postsData.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));

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
                {postsElements}
                {/*<Post message={p.message} likesCount={p.likesCount} />*/}
            </div>
        </div>
    );
};
