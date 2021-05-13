import React from "react";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props: {
    postsData: { id: number; message: string; likesCount: number }[];
}) => {
    let postsElements = props.postsData.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement: any = React.createRef<HTMLDivElement>();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
                {/*<Post message={p.message} likesCount={p.likesCount} />*/}
            </div>
        </div>
    );
};
