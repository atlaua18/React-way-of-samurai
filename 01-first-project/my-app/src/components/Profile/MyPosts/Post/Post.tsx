import React from "react";
import styles from "./post.module.css";

export const Post = () => {
    return (
        <div>
            <div className={styles.item}>
                <img src="https://cdn.dribbble.com/users/5438117/screenshots/15635046/media/66d0cfcb493361b7e2b838b6235c804b.jpg?compress=1&resize=1000x750"></img>
                post1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
};
