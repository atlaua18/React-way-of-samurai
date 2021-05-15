import React from "react";
import { IPostProps } from "../../../interfaces/IPostProps";
import styles from "./myposts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props: IPostProps) => {

    let postsElements = props.postsData.map((p) => (
        <Post message={p.message} likesCount={p.likesCount} />
    ));

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        let text: string = newPostElement?.current?.value ?? "";
        props.addPost(text);
        if(newPostElement.current !== null) {
            newPostElement.current.value = "";
        }
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
